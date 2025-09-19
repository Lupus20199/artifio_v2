import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  createUserWithEmailAndPassword,
  User,
} from "firebase/auth";
import { doc, serverTimestamp, setDoc, getDoc } from "firebase/firestore";
import { auth, db, googleProvider, facebookProvider } from "./firebase";

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
