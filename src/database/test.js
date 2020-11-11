const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    //  inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-23.5337662",
        lng: "-46.5083525",
        name: "Lar das meninas",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em //situação de risco e / ou vulnerabilidade social. ",
        whatsapp: "11 98545-5400",
        images: [
            "https://static.portaldacidade.com/unsafe/1150x767/https://s3.amazonaws.com/mariana2.portaldacidade.com/img/news/2019-10/dia-das-criancas-5d9f56926f6a0.jpg",
            "https://exame.com/wp-content/uploads/2017/09/thinkstockphotos-944585218.jpg",
        ].toString(),
        instructions: "Veja como se sentir a vontade e traga muito amor e paciênca para dar.",
        opening_hours: "Horário de visitas das 18h até 8hr",
        open_on_weekends: "1"
    })

    // consultar dados da tabela
    const SelectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(SelectedOrphanages)

    // consultar somente 1 orphanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)



})