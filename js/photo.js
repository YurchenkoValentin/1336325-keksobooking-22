const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const avatarChooser= document.querySelector('.ad-form__field input[type=file]');
const avatarPreview = document.querySelector('.ad-form-header__preview img');

const photoChooser = document.querySelector('.ad-form__upload input[type=file]');
const photoPreview = document.querySelector('.ad-form__photo');

avatarChooser.addEventListener('change', () => {
  const file = avatarChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      avatarPreview.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
});

const setDefaultAvatar = () => {
  avatarPreview.src = 'img/muffin-grey.svg';
};

photoChooser.addEventListener('change', () => {
  const photoWrapper = document.createElement('img');
  photoWrapper.style.width = '100%';
  photoWrapper.style.height = '100%';

  const file = photoChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      photoWrapper.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
  clearPhoto();
  photoPreview.append(photoWrapper);
});

const clearPhoto = () => {
  if (photoPreview.firstChild) {
    photoPreview.removeChild(photoPreview.firstChild);
  }
};

export {setDefaultAvatar, clearPhoto};
