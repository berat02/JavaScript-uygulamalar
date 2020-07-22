function onload() {
  var insanlar = [
    {
      adı: "Cyrus",
      soyadı: "Tatiana",
      yasi: "08.16.19",
      resmi:
        "egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est",
    },
    {
      adı: "Ishmael",
      soyadı: "Olivia",
      yasi: "10.13.20",
      resmi:
        "tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero at",
    },
    {
      adı: "Yasir",
      soyadı: "Kaye",
      yasi: "06.01.20",
      resmi: "Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu.",
    },
    {
      adı: "Akeem",
      soyadı: "Adena",
      yasi: "05.22.20",
      resmi:
        "non, vestibulum nec, euismod in, dolor. Fusce feugiat. Lorem ipsum",
    },
    {
      adı: "Mufutau",
      soyadı: "Montana",
      yasi: "07.07.21",
      resmi:
        "fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin",
    },
    {
      adı: "Uriah",
      soyadı: "Olga",
      yasi: "05.03.21",
      resmi:
        "Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat velit.",
    },
    {
      adı: "Ali",
      soyadı: "Amanda",
      yasi: "08.19.19",
      resmi: "ac mattis ornare, lectus ante dictum mi, ac mattis velit",
    },
    {
      adı: "Chancellor",
      soyadı: "Jaime",
      yasi: "09.01.19",
      resmi: "porttitor interdum. Sed auctor odio a purus. Duis elementum, dui",
    },
    {
      adı: "Quentin",
      soyadı: "Shelly",
      yasi: "06.13.20",
      resmi:
        "imperdiet nec, leo. Morbi neque tellus, imperdiet non, vestibulum nec,",
    },
    {
      adı: "Allen",
      soyadı: "India",
      yasi: "05.28.21",
      resmi: "arcu. Aliquam ultrices iaculis odio. Nam interdum enim non nisi.",
    },
    {
      adı: "Quentin",
      soyadı: "Sophia",
      yasi: "02.11.20",
      resmi: "urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus",
    },
    {
      adı: "Graham",
      soyadı: "Sasha",
      yasi: "03.23.21",
      resmi:
        "aliquet molestie tellus. Aenean egestas hendrerit neque. In ornare sagittis",
    },
    {
      adı: "Michael",
      soyadı: "Deanna",
      yasi: "10.26.19",
      resmi:
        "vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque",
    },
    {
      adı: "Bradley",
      soyadı: "Galena",
      yasi: "03.13.20",
      resmi:
        "et tristique pellentesque, tellus sem mollis dui, in sodales elit",
    },
    {
      adı: "Barrett",
      soyadı: "Kai",
      yasi: "02.23.21",
      resmi:
        "cursus et, magna. Praesent interdum ligula eu enim. Etiam imperdiet",
    },
    {
      adı: "Fletcher",
      soyadı: "Ariana",
      yasi: "07.05.20",
      resmi:
        "gravida molestie arcu. Sed eu nibh vulputate mauris sagittis placerat.",
    },
    {
      adı: "Herman",
      soyadı: "Shana",
      yasi: "07.17.20",
      resmi: "mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor",
    },
    {
      adı: "Dylan",
      soyadı: "Ivy",
      yasi: "04.16.20",
      resmi: "at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque",
    },
    {
      adı: "Cameron",
      soyadı: "Dacey",
      yasi: "09.11.20",
      resmi: "Proin mi. Aliquam gravida mauris ut mi. Duis risus odio,",
    },
    {
      adı: "Len",
      soyadı: "Libby",
      yasi: "10.21.19",
      resmi: "tempus risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi",
    },
    {
      adı: "Lester",
      soyadı: "Rina",
      yasi: "11.28.19",
      resmi:
        "et ultrices posuere cubilia Curae; Phasellus ornare. Fusce mollis. Duis",
    },
    {
      adı: "Walter",
      soyadı: "Leigh",
      yasi: "01.27.21",
      resmi:
        "penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec",
    },
    {
      adı: "Reuben",
      soyadı: "Ruth",
      yasi: "06.27.21",
      resmi:
        "faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus ornare.",
    },
    {
      adı: "Eaton",
      soyadı: "Tatiana",
      yasi: "05.17.20",
      resmi:
        "pede. Cum sociis natoque penatibus et magnis dis parturient montes,",
    },
    {
      adı: "Igor",
      soyadı: "Daria",
      yasi: "07.19.19",
      resmi: "arcu iaculis enim, sit amet ornare lectus justo eu arcu.",
    },
    {
      adı: "Valentine",
      soyadı: "Kirby",
      yasi: "04.06.21",
      resmi: "Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus",
    },
    {
      adı: "Dennis",
      soyadı: "Mary",
      yasi: "02.02.20",
      resmi:
        "parturient montes, nascetur ridiculus mus. Aenean eget magna. Suspendisse tristique",
    },
    {
      adı: "Donovan",
      soyadı: "Veda",
      yasi: "06.28.20",
      resmi:
        "Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum",
    },
    {
      adı: "Slade",
      soyadı: "Odessa",
      yasi: "04.10.21",
      resmi:
        "faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus ornare.",
    },
    {
      adı: "Raymond",
      soyadı: "Shoshana",
      yasi: "10.31.20",
      resmi:
        "ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus.",
    },
    {
      adı: "Tucker",
      soyadı: "Nyssa",
      yasi: "04.05.21",
      resmi:
        "Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum.",
    },
    {
      adı: "Steven",
      soyadı: "Cecilia",
      yasi: "09.30.20",
      resmi: "neque. Sed eget lacus. Mauris non dui nec urna suscipit",
    },
    {
      adı: "Oren",
      soyadı: "Dominique",
      yasi: "12.17.19",
      resmi: "dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In",
    },
    {
      adı: "Abraham",
      soyadı: "Lillian",
      yasi: "02.21.20",
      resmi: "aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque",
    },
    {
      adı: "Cole",
      soyadı: "Urielle",
      yasi: "10.18.20",
      resmi: "aliquam eros turpis non enim. Mauris quis turpis vitae purus",
    },
    {
      adı: "Rashad",
      soyadı: "Yuri",
      yasi: "03.23.20",
      resmi: "Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non",
    },
    {
      adı: "Gray",
      soyadı: "Ulla",
      yasi: "06.19.20",
      resmi: "nec orci. Donec nibh. Quisque nonummy ipsum non arcu. Vivamus",
    },
    {
      adı: "Jeremy",
      soyadı: "Kameko",
      yasi: "09.16.20",
      resmi: "id, blandit at, nisi. Cum sociis natoque penatibus et magnis",
    },
    {
      adı: "Joshua",
      soyadı: "Hayley",
      yasi: "11.18.19",
      resmi: "in molestie tortor nibh sit amet orci. Ut sagittis lobortis",
    },
    {
      adı: "Brenden",
      soyadı: "Aiko",
      yasi: "06.08.20",
      resmi:
        "facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc",
    },
    {
      adı: "Ivan",
      soyadı: "Jillian",
      yasi: "12.10.20",
      resmi: "in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla",
    },
    {
      adı: "Ulric",
      soyadı: "Jane",
      yasi: "12.11.19",
      resmi: "elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris",
    },
    {
      adı: "Lester",
      soyadı: "Zelda",
      yasi: "11.13.19",
      resmi: "elit elit fermentum risus, at fringilla purus mauris a nunc.",
    },
    {
      adı: "Zephania",
      soyadı: "Sopoline",
      yasi: "03.02.20",
      resmi:
        "fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus orci",
    },
    {
      adı: "Francis",
      soyadı: "Heather",
      yasi: "06.03.21",
      resmi: "eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer in",
    },
    {
      adı: "Lionel",
      soyadı: "Briar",
      yasi: "10.05.19",
      resmi:
        "sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam",
    },
    {
      adı: "Melvin",
      soyadı: "Pearl",
      yasi: "08.30.20",
      resmi:
        "pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus",
    },
    {
      adı: "Lamar",
      soyadı: "Nomlanga",
      yasi: "11.04.19",
      resmi:
        "scelerisque dui. Suspendisse ac metus vitae velit egestas lacinia. Sed",
    },
    {
      adı: "Gannon",
      soyadı: "Brynne",
      yasi: "03.09.21",
      resmi: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
    },
    {
      adı: "Otto",
      soyadı: "Rhea",
      yasi: "02.16.21",
      resmi:
        "augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum.",
    },
    {
      adı: "Porter",
      soyadı: "Tatiana",
      yasi: "07.22.19",
      resmi:
        "egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta",
    },
    {
      adı: "George",
      soyadı: "Joan",
      yasi: "08.27.20",
      resmi:
        "Nam porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est.",
    },
    {
      adı: "Boris",
      soyadı: "Kalia",
      yasi: "03.26.20",
      resmi:
        "sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis",
    },
    {
      adı: "Hunter",
      soyadı: "Nadine",
      yasi: "06.26.20",
      resmi:
        "eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus",
    },
    {
      adı: "Gabriel",
      soyadı: "Lee",
      yasi: "06.20.20",
      resmi:
        "Suspendisse aliquet, sem ut cursus luctus, ipsum leo elementum sem,",
    },
    {
      adı: "Abdul",
      soyadı: "Florence",
      yasi: "03.15.20",
      resmi:
        "venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing",
    },
    {
      adı: "Brody",
      soyadı: "Sonia",
      yasi: "07.16.21",
      resmi: "libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus",
    },
    {
      adı: "Alvin",
      soyadı: "Kyla",
      yasi: "06.21.21",
      resmi: "et nunc. Quisque ornare tortor at risus. Nunc ac sem",
    },
    {
      adı: "Thor",
      soyadı: "Yen",
      yasi: "09.12.20",
      resmi:
        "ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus",
    },
    {
      adı: "Lionel",
      soyadı: "Bryar",
      yasi: "09.19.19",
      resmi: "Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec",
    },
    {
      adı: "Bevis",
      soyadı: "Virginia",
      yasi: "03.29.21",
      resmi:
        "egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem",
    },
    {
      adı: "Luke",
      soyadı: "Lenore",
      yasi: "10.16.20",
      resmi:
        "odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus.",
    },
    {
      adı: "Reece",
      soyadı: "Courtney",
      yasi: "03.31.21",
      resmi: "metus. In nec orci. Donec nibh. Quisque nonummy ipsum non",
    },
    {
      adı: "Murphy",
      soyadı: "Lael",
      yasi: "02.23.21",
      resmi:
        "ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam",
    },
    {
      adı: "Abdul",
      soyadı: "Hyacinth",
      yasi: "04.20.20",
      resmi:
        "id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim",
    },
    {
      adı: "Dalton",
      soyadı: "Brielle",
      yasi: "07.04.20",
      resmi: "quis, pede. Praesent eu dui. Cum sociis natoque penatibus et",
    },
    {
      adı: "Travis",
      soyadı: "Colette",
      yasi: "11.19.20",
      resmi: "et netus et malesuada fames ac turpis egestas. Aliquam fringilla",
    },
    {
      adı: "Avram",
      soyadı: "Alika",
      yasi: "10.31.19",
      resmi:
        "cursus et, magna. Praesent interdum ligula eu enim. Etiam imperdiet",
    },
    {
      adı: "Rogan",
      soyadı: "Hillary",
      yasi: "09.07.20",
      resmi:
        "lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies",
    },
    {
      adı: "Hayden",
      soyadı: "Sonya",
      yasi: "03.11.20",
      resmi: "ultrices, mauris ipsum porta elit, a feugiat tellus lorem eu",
    },
    {
      adı: "Kibo",
      soyadı: "Alea",
      yasi: "03.23.20",
      resmi: "Donec feugiat metus sit amet ante. Vivamus non lorem vitae",
    },
    {
      adı: "Owen",
      soyadı: "Keelie",
      yasi: "12.12.19",
      resmi:
        "quis lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus",
    },
    {
      adı: "Hamilton",
      soyadı: "Dana",
      yasi: "10.05.20",
      resmi:
        "consectetuer mauris id sapien. Cras dolor dolor, tempus non, lacinia",
    },
    {
      adı: "Declan",
      soyadı: "Vivian",
      yasi: "05.12.20",
      resmi:
        "auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus,",
    },
    {
      adı: "Jamal",
      soyadı: "Wendy",
      yasi: "03.25.21",
      resmi:
        "aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non",
    },
    {
      adı: "Brady",
      soyadı: "Halla",
      yasi: "03.06.20",
      resmi:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam auctor,",
    },
    {
      adı: "Walker",
      soyadı: "Robin",
      yasi: "03.10.20",
      resmi: "Sed eget lacus. Mauris non dui nec urna suscipit nonummy.",
    },
    {
      adı: "Brennan",
      soyadı: "Celeste",
      yasi: "04.08.20",
      resmi: "adipiscing, enim mi tempor lorem, eget mollis lectus pede et",
    },
    {
      adı: "Jelani",
      soyadı: "Kevyn",
      yasi: "01.09.20",
      resmi: "a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris",
    },
    {
      adı: "Kasimir",
      soyadı: "Bryar",
      yasi: "01.07.20",
      resmi:
        "dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis",
    },
    {
      adı: "Wade",
      soyadı: "Kimberley",
      yasi: "03.28.20",
      resmi:
        "ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor",
    },
    {
      adı: "Vance",
      soyadı: "Bertha",
      yasi: "01.29.21",
      resmi: "mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed",
    },
    {
      adı: "Henry",
      soyadı: "Shelby",
      yasi: "09.11.19",
      resmi:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames",
    },
    {
      adı: "Nero",
      soyadı: "Avye",
      yasi: "02.12.20",
      resmi:
        "a sollicitudin orci sem eget massa. Suspendisse eleifend. Cras sed",
    },
    {
      adı: "Hammett",
      soyadı: "Medge",
      yasi: "12.25.19",
      resmi:
        "sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus",
    },
    {
      adı: "Hu",
      soyadı: "Raven",
      yasi: "07.27.19",
      resmi:
        "at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas",
    },
    {
      adı: "Jack",
      soyadı: "Sybil",
      yasi: "07.19.19",
      resmi: "mauris ut mi. Duis risus odio, auctor vitae, aliquet nec,",
    },
    {
      adı: "Kenneth",
      soyadı: "Rachel",
      yasi: "02.17.21",
      resmi: "nulla magna, malesuada vel, convallis in, cursus et, eros. Proin",
    },
    {
      adı: "Caldwell",
      soyadı: "Jael",
      yasi: "06.04.20",
      resmi:
        "et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien,",
    },
    {
      adı: "Macon",
      soyadı: "Quin",
      yasi: "11.13.19",
      resmi: "ut, nulla. Cras eu tellus eu augue porttitor interdum. Sed",
    },
    {
      adı: "Jerry",
      soyadı: "Helen",
      yasi: "11.05.20",
      resmi:
        "ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam",
    },
    {
      adı: "Oscar",
      soyadı: "Tana",
      yasi: "09.02.19",
      resmi:
        "egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta",
    },
    {
      adı: "Aquila",
      soyadı: "Aline",
      yasi: "11.12.19",
      resmi: "netus et malesuada fames ac turpis egestas. Fusce aliquet magna",
    },
    {
      adı: "Felix",
      soyadı: "Carla",
      yasi: "01.29.21",
      resmi:
        "luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc",
    },
    {
      adı: "Mark",
      soyadı: "Justine",
      yasi: "02.26.20",
      resmi:
        "Phasellus dapibus quam quis diam. Pellentesque habitant morbi tristique senectus",
    },
    {
      adı: "Macaulay",
      soyadı: "Ifeoma",
      yasi: "05.17.21",
      resmi:
        "nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae",
    },
    {
      adı: "Solomon",
      soyadı: "Hilary",
      yasi: "09.07.19",
      resmi:
        "augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum.",
    },
    {
      adı: "Akeem",
      soyadı: "Ursa",
      yasi: "08.28.20",
      resmi:
        "nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem",
    },
    {
      adı: "Wing",
      soyadı: "Alexandra",
      yasi: "07.21.19",
      resmi:
        "urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus",
    },
    {
      adı: "Rajah",
      soyadı: "Melodie",
      yasi: "06.17.21",
      resmi:
        "aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non",
    },
  ];
  var insanlarpanel = document.getElementById("insanlar");
  for (var i = 0; i < insanlar.length; i++) {
    var insan_divi = document.createElement("div");
    insan_divi.classList.add("insan")

    var resim = document.createElement("img");
    resim.src ="https://avatars0.githubusercontent.com/u/46246019?s=460&u=49579d8a708c36abc3a76ad41772cede2a1a498c&v=4";
    resim.classList.add("resim")
    
    insan_divi.appendChild(resim);
    
    var span_panel = document.createElement("div");

    span_panel.classList.add("span-panel");
    //#region  Span oluşturma
    var adi_span = document.createElement("span");
    var soyadi_span= document.createElement("span");
    var resmi_span = document.createElement("span");
    var yasi_span = document.createElement("span")
    
    adi_span.innerHTML = "Adı : "+insanlar[i].adı;
    soyadi_span.innerHTML ="Soyadı : " +insanlar[i].soyadı;
    yasi_span.innerHTML = "Yaşı : " +insanlar[i].yasi
    resmi_span.innerHTML = "Resmi : " +insanlar[i].resmi;

    span_panel.appendChild(adi_span);
    span_panel.appendChild(soyadi_span);
    span_panel.appendChild(yasi_span);
    span_panel.appendChild(resmi_span);
//#endregion
    
    insan_divi.appendChild(span_panel);
    insanlarpanel.appendChild(insan_divi);
  }
}
