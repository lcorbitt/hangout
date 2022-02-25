document.addEventListener('turbolinks:load', () => {
  const avatar_input = document.querySelector('#sign_up_avatar_input')
  const no_avatar = document.querySelector('#sign_up_no_avatar')
  const upload_label = document.querySelector('#sign_up_upload_label')

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
      }

      reader.readAsDataURL(input.files[0])
    }
  }
})
