// document.addEventListener('turbolinks:load', () => {
//   const avatar_input = document.querySelector('#sign_up_avatar_input')
//   const no_avatar = document.querySelector('#sign_up_no_avatar')

//   avatar_input.onchange = () => {
//     no_avatar.style.display = "none"
//     showImage(avatar_input)
//   }

//   const showImage = (input) => {
//     if (input.files && input.files[0]) {
//       var reader = new FileReader()

//       reader.onload = (e) => {
//         const preview = document.querySelector('#sign_up_avatar_preview')

//         preview.setAttribute('src', e.target.result)
//           // .width(150)
//           // .height(200)
//       }

//       reader.readAsDataURL(input.files[0])
//     }
//   }
// })

document.addEventListener('turbolinks:load', () => {
  const avatar_input = document.querySelector('#sign_up_avatar_input')
  const no_avatar = document.querySelector('#sign_up_no_avatar')
  const upload_label = document.querySelector('#sign_up_upload_label')

  console.log('HEREE')
  console.log(upload_label)

  if (avatar_input) {
    avatar_input.onchange = () => {
      no_avatar.style.display = "none"
      showImage(avatar_input)
      // upload_label.innerHTML = 'Change'
    }
  }

  const showImage = (input) => {
    if (input.files && input.files[0]) {
      var reader = new FileReader()

      reader.onload = (e) => {
        const preview = document.querySelector('#sign_up_avatar_preview')

        preview.setAttribute('src', e.target.result)
          // .width(150)
          // .height(200)
      }

      reader.readAsDataURL(input.files[0])
    }
  }
})
