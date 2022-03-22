import firebase from "firebase/compat/app"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { getStorage } from "firebase/storage"

const config = {
	apiKey: "AIzaSyABYPtTPTtDRVFywCqehsNchDxzfQ14zzU",
	authDomain: "crwn-db-1979f.firebaseapp.com",
	projectId: "crwn-db-1979f",
	storageBucket: "crwn-db-1979f.appspot.com",
	messagingSenderId: "136834740017",
	appId: "1:136834740017:web:9424b5a558479849e80a10",
	measurementId: "G-SSRXZ4044M",
}

firebase.initializeApp(config)

export const storage = getStorage()
export const auth = getAuth()

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
	prompt: "select_account",
})
export const signInWithGoogle = (e: any) => {
	e.preventDefault()
	return signInWithPopup(auth, provider)
}

export default firebase
