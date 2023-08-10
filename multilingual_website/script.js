class Traduction{
    constructor(){

        this.pubs_ar = [
            {img: "./img/morocco.jpg", title:"المملكة المغربية",          paragraphe:`إن المغرب بلد عرف تغييرات وتطورات ساهمت في انفتاحه على المستقبل. كما حافظ على تقاليده وجعل تراثه الثقافي يزدهر، مم أدى إلى تعزيز روافع التنمية. تعد مدينة مراكش مثالًا نموذجيا: تتميز المدينة العتيقة وأسواقها بسحر لا يضاهى، في حين تقدم كل من كليز والحي الشتوي" hivernage" أحدث المرافق والبنى التحتية. يعتبر المزج بين الحداثة والتقاليد القوة الحقيقية للمغرب.`},
            {img: "./img/france.png", title:"فرنسا",                       paragraphe:`فرنسا هي بلاد واقعة في أوروبا الغربية، والتي تتكون من مجموعة جزر وأراضٍ وراء البحار الواقعة في القارات الأخرى. تمتد فرنسا من البحر الأبيض المتوسط إلى القناة الإنجليزية وبحر الشمال، ومن نهر الراين إلى المحيط الأطلسي. بسبب شكلها، فرنسا معروفة من قبل الفرنسيين "بالسداسي". هي مجاورة للمملكة المتحدة، بلجيكا، لوكسمبورغ، ألمانيا، سويسرا، إيطاليا، موناكو، أندورا، وإسبانيا. تشترك الجمهورية الفرنسية في حدود الأرض أيضاً في الخارج مع البرازيل، سورينام، وجزر الأنتيل الهولندية.`},
            {img: "./img/italy.png", title:"إطاليا",                       paragraphe:`إيطاليا هي دولة تقع في جنوب وغرب أوروبا، وتتكون من شبه جزيرة على شكل حذاء محاطة بعدة جزر، بما في ذلك صقلية Sardinia.0 تحدها فرنسا من الغرب وسويسرا والنمسا من الشمال، وسلوفينيا من الشرق. يبلغ عدد سكان إيطاليا حوالي 60 مليون نسمة وتعرف باسم «il Belpaese» بسبب تنوع المناظر الطبيعية ولأنها تمتلك أكبر تراث فني في العالم. وهي موطن لأكبر عدد من مواقع التراث العالمي لليونسكو في أي دولة في العالم.`},
            {img: "./img/KSA.png", title:"المملكة العربية السعودية",      paragraphe:`السَّعُودِيَّة (أو رَسْمِيًّا: الْمَمْلَكَة العَرَبيَّة السَّعُودِيَّة) هي دولة عربية، وتعد أكبر دول الشرق الأوسط مساحة، وتقع تحديدًا في الجنوب الغربي من قارة آسيا وتشكل الجزء الأكبر من شبه الجزيرة العربية إذ تبلغ مساحتها حوالي مليوني كيلومتر مربع. يحدها من الشمال جمهورية العراق والأردن وتحدها دولة الكويت من الشمال الشرقي، ومن الشرق تحدها كل من دولة قطر والإمارات العربية المتحدة بالإضافة إلى مملكة البحرين التي ترتبط بالسعودية من خلال جسر الملك فهد الواقع على مياه الخليج العربي، ومن الجنوب تحدها اليمن، وسلطنة عُمان من الجنوب الشرقي.`},
        ]

        this.pubs_en = [
            {img: "./img/morocco.jpg", title:"Kingdom of Morocco",       paragraphe:`Morocco is a country that has experienced changes and developments that have contributed to Morocco's openness to the future. He also preserved his traditions and made his cultural heritage flourish, as it strengthened the levers of development. The city of Marrakech is a typical example: the antique city and its markets have an incomparable charm, while Cleese and the winter neighbourhood "hivernage" offer state-of-the-art facilities and infrastructure. The combination of modernity and tradition is Morocco's real strength.`},
            {img: "./img/france.png", title:"France",                    paragraphe:`France is a country in Western Europe, which consists of a group of islands and overseas lands located on other continents. France extends from the Mediterranean to the English Channel and the North Sea, and from the Rhine to the Atlantic Ocean. Because of its form, France is known by the French as "hexagonal." It is adjacent to the United Kingdom, Belgium, Luxembourg, Germany, Switzerland, Italy, Monaco, Andorra and Spain. The French Republic also shares the land's borders abroad with Brazil, Suriname and the Netherlands Antilles.`},
            {img: "./img/italy.png", title:"Italy",                      paragraphe:`Italy is a country located in Southern and Western Europe, consisting of a boot-shaped peninsula surrounded by several islands, including Sicily and Sardinia.0 It is bordered by France to the west, Switzerland and Austria to the north, and Slovenia to the east.1 Italy has a population of approximately 60 million and is known as "il Belpaese" due to its variety of landscapes and for having the world's largest artistic patrimony. It is home to the greatest number of UNESCO World Heritage Sites of any nation in the world.`},
            {img: "./img/KSA.png", title:"Kingdom of Saudia Arabia",     paragraphe:`Al-Saudi (or official: the Arab property of Al-Saudi) is an Arab country, the largest in the Middle East, located in the south-west of the Asian continent and making up the bulk of the Arabian Peninsula with an area of about 2 million square kilometres. Bordered from the north by the Republic of Iraq and Jordan and bordered by the State of Kuwait from the north-east, and from the east by the State of Qatar and the United Arab Emirates, as well as the Kingdom of Bahrain, which is linked to Saudi Arabia through the King Fahd Bridge on the waters of the Arabian Gulf, and from the south by Yemen and Oman.`},
        ]
        

        arabic.onclick = ()=>{
            this.setLanguage("arabic");
            localStorage.setItem("language", "arabic");
        };
        
        english.onclick = ()=>{
            this.setLanguage("english");
            localStorage.setItem("language", "english");
        };

        if(localStorage.getItem("language") != null){
            this.setLanguage(localStorage.getItem("language"));
        }else{
            this.setLanguage("arabic");
        }   
    }

    setLanguage(language){
        if(language == "arabic"){
            document.getElementById("container").dir = "rtl";
            document.getElementById("pubs").innerHTML = "";
            document.getElementById("logo_title").innerText = "موقع متعدد اللغات";


            this.pubs_ar.forEach(element => {
                document.getElementById("pubs").innerHTML += `
                <section class="pub">
                    <img class="pub_img" src="${element.img}" alt="">
                    <h2 class="pub_title">${element.title}</h2>
                    <p class="pub_p">${element.paragraphe}</p>
                </section>
                `;
                console.log(element);
            });
        }else if(language == "english"){
            document.getElementById("container").dir = "ltr";
            document.getElementById("pubs").innerHTML = "";
            document.getElementById("logo_title").innerText = "Multilingual Website";

            this.pubs_en.forEach(element => {
                document.getElementById("pubs").innerHTML += `
                <section class="pub">
                    <img class="pub_img" src="${element.img}" alt="">
                    <h2 class="pub_title">${element.title}</h2>
                    <p class="pub_p">${element.paragraphe}</p>
                </section>
                `;
                console.log(element);
            });

            var pub = document.querySelectorAll(".pub");
            for(var cont=0; cont<pub.length; ++cont){
                pub[cont].style.height = "583px";
            }
        }
    }
}

onload = new Traduction();