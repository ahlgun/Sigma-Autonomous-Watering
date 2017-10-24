var main = new Vue ({
    el: '#mainElement',
    data: {
        focusClassName: 'project-not-in-focus',
        projectInFocus: {},
        menuTab: 1,
        projects: [
            {
                imgSrc: 'media/Namnlös.png',
                name: "Niklas Nauber",
                description: "Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden, utan även övergången till elektronisk typografi utan större förändringar. Det blev allmänt känt på 1960-talet i samband med lanseringen av Letraset-ark med avsnitt av Lorem Ipsum, och senare med mjukvaror som Aldus PageMaker.",
                techs: ["vue.js", "html", "css","vue.js", "html", "css"],
                id: 0
            },
            {
                imgSrc: "media/spectralogo small.png",
                name: "some Name",
                description: "some description",
                techs: ["vue.js", "html", "css","vue.js", "html", "css"],
                id: 1
            },
            {
                imgSrc: 'media/Namnlös.png',
                name: "Niklas Nauber",
                description: "some description",
                techs: ["vue.js", "html", "css","vue.js", "html", "css"],
                id: 0
            },
            {
                imgSrc: "media/spectralogo small.png",
                name: "some Name",
                description: "some description",
                techs: ["vue.js", "html", "css"],
                id: 1
            },
            {
                imgSrc: 'media/namnlös.png',
                name: "Niklas Nauber",
                description: "some description",
                techs: ["vue.js", "html", "css"],
                id: 0
            },
            {
                imgSrc: "media/spectralogo small.png",
                name: "some Name",
                description: "some description",
                techs: ["vue.js", "html", "css"],
                id: 1
            }
        ]
    },
    computed: {
        focusClass: {
            get: function () {
                return this.focusClassName;
            },
            set: function () {

                this.focusClassName = this.focusClassName;
            }
        }



    },
    methods: {
        introDivHeight: function (event) {

            window.onscroll = function () {
                var height = document.getElementById('introDiv').clientHeight;
                if (height >= 10) {
                    height = height - document.body.scrollTop;
                    console.log(height + ' = height')

                }

                console.log(document.body.height + ' = introDivheight')
                return height + px;

            }

        },
        focusOnProject: function (event) {
            console.log('focusing on: ' + this.projects[event.target.id].name)
            this.projectInFocus = this.projects[event.target.id];
            this.focusClassName = 'project-in-focus';
        },
        unFocus: function () {
            this.projectInFocus = {};
            this.focusClassName = 'project-not-in-focus';
        }


    }
})