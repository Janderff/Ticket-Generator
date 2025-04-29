/*Função para pegar a foto e colocar dentro do imput*/
const inputFile = document.querySelector('#pictureInput');
const pictureImages = document.querySelector('.pictureImage');

const pictureImgTxt = 'Drop and drop or click to upload';
pictureImages.innerHTML = pictureImgTxt;

inputFile.addEventListener("change", function (e) {
    const inputTarget = e.target;
    const file = inputTarget.files[0];
    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function (e) {
            const readerTarget = e.target;

            const img = document.createElement('img');
            img.src = readerTarget.result;
            img.classList.add('pictureInput');
            pictureImages.innerHTML = '';


            pictureImages.appendChild(img);

        })
        reader.readAsDataURL(file)
        console.log(file)
    }
})

/*Função para pegar os dados exceto a foto*/
const btn = document.querySelector('button');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const gitHub = document.getElementById('gitHub');

btn.addEventListener('click', function (event) {
    event.preventDefault();
    const fullNameTxt = fullName.value;
    const emailTxt = email.value;
    const gitHubTxt = gitHub.value;
    console.log(fullNameTxt, emailTxt, gitHubTxt);
})