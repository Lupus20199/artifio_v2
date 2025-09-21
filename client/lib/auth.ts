import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  createUserWithEmailAndPassword,
  updatePassword as fbUpdatePassword,
  updateEmail as fbUpdateEmail,
  reauthenticateWithCredential,
  EmailAuthProvider,
  deleteUser,
  User,
} from "firebase/auth";
import { doc, serverTimestamp, setDoc, getDoc } from "firebase/firestore";
import { auth, db, storage, googleProvider, facebookProvider } from "./firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

async function ensureUserDocument(user: User, extra: Record<string, any> = {}) {
  const ref = doc(db, "users", user.uid);
  const snap = await getDoc(ref);
  const base = {
    uid: user.uid,
    email: user.email || null,
    displayName: user.displayName || null,
    photoURL: user.photoURL || null,
    providerId: user.providerData?.[0]?.providerId || null,
    lastLoginAt: serverTimestamp(),
    ...extra,
  } as Record<string, any>;
  if (!snap.exists()) {
    base.createdAt = serverTimestamp();
  }
  await setDoc(ref, base, { merge: true });
}

export async function loginWithEmailPassword(
  email: string,
  password: string,
  extra: Record<string, any> = {},
) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  await ensureUserDocument(cred.user, extra);
  return cred.user;
}

export async function loginWithGoogle(extra: Record<string, any> = {}) {
  const cred = await signInWithPopup(auth, googleProvider);
  await ensureUserDocument(cred.user, extra);
  return cred.user;
}

export async function loginWithFacebook(extra: Record<string, any> = {}) {
  const cred = await signInWithPopup(auth, facebookProvider);
  await ensureUserDocument(cred.user, extra);
  return cred.user;
}

export async function updateDisplayName(name: string) {
  if (!auth.currentUser) return;
  await updateProfile(auth.currentUser, { displayName: name });
  await ensureUserDocument(auth.currentUser, { displayName: name });
}

export async function registerWithEmailPassword(
  fullName: string,
  email: string,
  password: string,
  extra: Record<string, any> = {},
) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  if (fullName) await updateProfile(cred.user, { displayName: fullName });
  await ensureUserDocument(cred.user, {
    displayName: fullName || cred.user.displayName,
    ...extra,
  });
  return cred.user;
}

export async function logout() {
  await signOut(auth);
}

export async function updateProfilePhoto(file: File) {
  if (!auth.currentUser) throw new Error("Nu ești autentificat");
  const uid = auth.currentUser.uid;
  const storageRef = ref(storage, `avatars/${uid}`);
  const uploaded = await uploadBytes(storageRef, file, {
    contentType: file.type || "image/jpeg",
  });
  const url = await getDownloadURL(uploaded.ref);
  await updateProfile(auth.currentUser, { photoURL: url });
  await ensureUserDocument(auth.currentUser, { photoURL: url });
  return url;
}

export async function updatePasswordWithReauth(currentPassword: string, newPassword: string) {
  const user = auth.currentUser;
  if (!user) throw new Error("Nu ești autentificat");
  if (!user.email) throw new Error("Contul nu are o adresă de email");
  const cred = EmailAuthProvider.credential(user.email, currentPassword);
  await reauthenticateWithCredential(user, cred);
  await fbUpdatePassword(user, newPassword);
  await ensureUserDocument(user, { passwordUpdatedAt: serverTimestamp() });
}

export async function updateEmailWithReauth(currentPassword: string, newEmail: string) {
  const user = auth.currentUser;
  if (!user) throw new Error("Nu ești autentificat");
  if (!user.email) throw new Error("Contul nu are o adresă de email");
  const cred = EmailAuthProvider.credential(user.email, currentPassword);
  await reauthenticateWithCredential(user, cred);
  await fbUpdateEmail(user, newEmail);
  await ensureUserDocument(user, { email: newEmail });
}

export async function deleteAccountWithReauth(currentPassword: string) {
  const user = auth.currentUser;
  if (!user) throw new Error("Nu ești autentificat");
  if (!user.email) throw new Error("Contul nu are o adresă de email");
  const cred = EmailAuthProvider.credential(user.email, currentPassword);
  await reauthenticateWithCredential(user, cred);
  await deleteUser(user);
}
