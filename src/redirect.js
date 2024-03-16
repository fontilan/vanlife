/* 
 Fix for the miragejs / react-router redirect issue.
 Source code and explanation in the link below.
 https://stackoverflow.com/a/76608977
*/

import { redirect } from 'react-router-dom'

//create a function
function mutateResponse(path) {
  //redirect returns the patch response
  let response = redirect(path)
  //body can be anything but undefined
  response.body = true
  return response
}
export { mutateResponse as redirect }
