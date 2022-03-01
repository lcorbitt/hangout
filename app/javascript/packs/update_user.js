document.addEventListener('turbolinks:load', () => {
  const avatar_input = document.querySelector('#update_user_avatar_input')
  const no_avatar = document.querySelector('#update_user_no_avatar')
  const avatar = document.querySelector('#update_user_avatar')

  if (avatar_input) {
    avatar_input.onchange = () => {
      if (no_avatar) {
        no_avatar.style.display = "none"
      }
      else {
        avatar.style.display = "none"
      }

      showImage(avatar_input)
    }
  }

  const showImage = (input) => {
    if (input.files && input.files[0]) {
      var reader = new FileReader()

      reader.onload = (e) => {
        const preview = document.querySelector('#update_user_avatar_preview')

        preview.setAttribute('src', e.target.result)
      }

      reader.readAsDataURL(input.files[0])
    }
  }
})
