// Geeting Hash Password with given length
export const HashPass = (passLen) => {
 let hash = ""
 for (let i = 0; i < passLen; i++) {
  hash += "*";
 }
 return hash
}

export const regEmail = (email) => {
 return email.match("^[a-z0-9](.?[a-z0-9]){5,}@g(oogle)?mail.com$")
}