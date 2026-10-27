import React from 'react'

const App = () => {

  // 4 functions for local storage:
      // 1. localStorage.getItem()
      // 2. localStorage.setItem()
      // 3. localStorage.removeItem()
      // 4. localStorage.clear()


  // localStorage.removeItem("User")

  // localStorage.clear()    ---> statement to clear local storage
  // localStorage.setItem('user', "Shaurya")    --> to add data in the local storage, remains there even if the statement is removed.
  // const user = localStorage.getItem("user")

  // console.log(user)


  // const user = {
  //   username: 'Shaurya',
  //   age: 18,
  //   city: 'Lucknow'
  // }
  // // localStorage.setItem('user',user)  ---> this invokes an error because the data to be stored inside local Storage has to be in String format. Use json.stringify.
  // localStorage.setItem('user', JSON.stringify(user))



  // Fetch the object from the lcoal storage
  // The fetched details will be in string format so we need to convert it back to obeject format.
  var details = localStorage.getItem('user')
  console.log(details, typeof (details))
  

  var user = JSON.parse(localStorage.getItem('user'))
  console.log(user, typeof (user))


  return (
    <div>App</div>
  )
}

export default App