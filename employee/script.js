
// creating an array of object of employees
const empl = [
  {
    name: "Prashant verma",
    designation: "Software Intern",
    experience: 0.5,
    img: "https://media.licdn.com/dms/image/v2/D5603AQERho6CmKph6g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1711247273858?e=1733356800&v=beta&t=26uvQa8siazhtc5N2-wTyXkhF0kSxTc53Xtr075LZYE",
    age: 24,
    link: "https://www.linkedin.com/in/prashantverma1712/",
    jobType: "Full Time",
  },
  {
    name: "Vidya Malve",
    designation: ".Net Developer",
    experience: 3,
    img: "https://media.licdn.com/dms/image/v2/D5603AQFAOc438zNR1w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726052167057?e=1733356800&v=beta&t=fgaS8I76m47cmTTkUaGBmzI36kwp02x2dOWjhyiJ5As",
    link: "https://www.linkedin.com/in/vidya-malve-8099b3235/",
    age: 28,
    jobType: "Full Time",
  },
  {
    name: "Pooja Shivakar",
    designation: "CCM consultant",
    img: "https://media.licdn.com/dms/image/v2/C4D03AQFsGSZ9QKJrsQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1630509577259?e=1733356800&v=beta&t=gD9CCNOjxM-swZJYZa_bRqiJul-hczX_LJ0erDXEEEc",
    experience: 3,
    link: "https://www.linkedin.com/in/pooja-shivarkar-54ab49201/",
    jobType: "Full Time",
  },
  {
    name: "Rashmi Chandra",
    designation: "CCM consultant",
    experience: 2,
    img: "https://media.licdn.com/dms/image/v2/D4D03AQFAgVq2gTW-sg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1667629246455?e=1733356800&v=beta&t=d80wFWRNDOZGDisgktiy6cdl0p1oafkByoS5yFK_-rA",
    age: 24,
    link: "https://www.linkedin.com/in/rashmi-chandra-b978ba204/",
    jobType: "Full Time",
  },
  {
    name: "Harshit Nishad",
    designation: "Software Intern",
    experience: 0.5,
    img: "https://media.licdn.com/dms/image/v2/D4D03AQHCWTCU9v3CZA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1689668766946?e=1733356800&v=beta&t=sQxOQYMZtWRLiLbwPmK8_rXRo41IQ2NkECcjJVwMYPA",
    age: 24,
    link: "https://www.linkedin.com/in/harshit-kumar-nishad-a68842246/",
    jobType: "Full Time",
  },
  {
    name: "Abhishek Nayak",
    designation: "Software Intern",
    experience: 0.5,
    img: "https://media.licdn.com/dms/image/v2/D5603AQGM7p63cEkf7Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727166262749?e=1733356800&v=beta&t=LwTS-dRgrehsR89bHfauU-h7R3a54D1ItUpaY2NLfIs",
    age: 22,
    link: "https://www.linkedin.com/in/nayak0502/",
    jobType: "Full Time",
  },
  {
    name: "Ashutosh Pal",
    designation: "Software Intern",
    experience: 0.5,
    img: "https://media.licdn.com/dms/image/v2/D5603AQECGN76w6G2Vw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710639270620?e=1733356800&v=beta&t=mANbIKn1BVSBDrpmYsH1XBfIH7FpM-z5i5z8J2H15tw",
    age: 22,
    link: "https://www.linkedin.com/in/aashu279p/",
    jobType: "Full Time",
  },
  {
    name: "Udita Rawat",
    designation: "CCM consultant",
    experience: 2,
    img: "https://media.licdn.com/dms/image/v2/D5603AQGyV1WYn-nlbQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722931528445?e=1733356800&v=beta&t=mroArdyvYm0gIJD3eUWt3AGvV2HKFClOqY1qlpah0Jo",
    age: 24,
    link: "https://www.linkedin.com/in/udita-rawat-70b33721a/",
    jobType: "Full Time",
  },
  {
    name: "Akshay Kumar",
    designation: "CCM consultant",
    experience: 2,
    img: "https://media.licdn.com/dms/image/v2/D4D03AQG_v1dTk8c-2Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1685043481900?e=1733356800&v=beta&t=ZS68sqh2vfSQNYrMfuvVCfB7M6qjNOoiCbl5knZEaW8",
    age: 24,
    link: "https://www.linkedin.com/in/akshay-kumar-singh-131aa11a0/",
    jobType: "Full Time",
  },
  {
    name: "Kavita Mavni",
    designation: "CCM consultant",
    experience: 3,
    img: "https://media.licdn.com/dms/image/v2/D4D03AQGvpMwh4JvQeQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1702622171342?e=1733356800&v=beta&t=w_vpczT5gY0euOLXVKOpVilFk966E_4-wx73_Hwey9A",
    age: 24,
    link: "https://www.linkedin.com/in/kavitamauni/",
    jobType: "Full Time",
  },
];

const all = document.getElementById("exp1");
const cont = document.getElementById("container");

all.addEventListener("click", function all(e) {
  e.preventDefault();
  cont.innerHTML = " ";
  empl.forEach((item) => {
    cont.innerHTML += `<div id="box1">
        <div id="container">
                <img src="${item.img}" id="im" alt="not found">
                 <h1>${item.name}</h1>
                <h3>Experience:-${item.experience} years</h3>
                <h2>${item.designation}</h2>
                <a href="${item.link}"> <button>Know More</button> </a>

        </div>
       </div> `;
  });
});

const intern = document.getElementById("exp0");

intern.addEventListener("click", function int(e) {
  e.preventDefault();
  cont.innerHTML = " ";
  empl.forEach((item) => {
    if (item.experience === 0.5) {
      cont.innerHTML += `<div id="box1">
        <div id="container">
                <img src="${item.img}" id="im" alt="not found">
                 <h1>${item.name}</h1>
                <h3>Experience:-${item.experience} years</h3>
                <h2>${item.designation}</h2>
                <a href="${item.link}"> <button>Know More</button> </a>

        </div>
       </div> `;
    }
  });
});

const sec = document.getElementById("exp2");
sec.addEventListener("click", function all(e) {
  e.preventDefault();
  cont.innerHTML = " ";
  empl.forEach((item) => {
    if (item.experience === 2) {
      cont.innerHTML += `<div id="box1">
        <div id="container">
                <img src="${item.img}" id="im" alt="not found">
                 <h1>${item.name}</h1>
                <h3>Experience:-${item.experience} years</h3>
                <h2>${item.designation}</h2>
                <a href="${item.link}"> <button>Know More</button> </a>

        </div>
       </div> `;
    }
  });
});

const third = document.getElementById("exp3");
third.addEventListener("click", function all(e) {
  e.preventDefault();
  cont.innerHTML = " ";
  empl.forEach((item) => {
    if (item.experience === 3) {
      cont.innerHTML += `<div id="box1">
        <div id="container">
                <img src="${item.img}" id="im" alt="not found">
                 <h1>${item.name}</h1>
                <h3>Experience:-${item.experience} years</h3>
                <h2>${item.designation}</h2>
                <a href="${item.link}"> <button>Know More</button> </a>

        </div>
       </div> `;
    }
  });
});
