import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  User,
} from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db, googleProvider, facebookProvider } from "./firebase";

async function ensureUserDocument(user: User, extra: Record<string, any> = {}) {
  const ref = doc(db, "users", user.uid);
  await setDoc(
    ref,
    {
      uid: user.uid,
      email: user.email || null,
      displayName: user.displayName || null,
      photoURL: user.photoURL || null,
      providerId: user.providerData?.[0]?.providerId || null,
      lastLoginAt: serverTimestamp(),
      createdAt: serverTimestamp(),
      ...extra,
    },
    { merge: true },
  );
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

export async function logout() {
  await signOut(auth);
}
