const Materi = [
    {
        id: 1,
        title: "Adiksi Game Online",
        description: "Penjelasan singkat terkait silabus materi 1 / intro materi contoh: materi 1 akan mempelajari apa itu adiksi game online dll.",
        unitTotal: 4,
        unitFinished: 4,
        unitStatus: 3,
        thumbnail: "image"
    },
    {
        id: 2,
        title: "Muraqabah",
        description: "Penjelasan singkat terkait silabus materi 2 / intro materi contoh: materi 2 akan mempelajari apa itu Muraqabah.",
        unitTotal: 4,
        unitFinished: 1,
        unitStatus: 2,
        thumbnail: "image"
    }
]

const MateriSub1 = [
    {
        id: 1,
        title: 'Pengertian adiksi game online',
        status: 3, //done
        materi: [
            {
                id: 1,
                thumbnail: 'link',
                contents: [
                    `<p>Game online adalah permainan dengan media elektronik yang menggunakan paket data atau jaringan internet untuk memainkannya.<p>`,
                    `<img width="1200" height="800" style="width: 50%; height: 100px; align-self: center;"src="https://www.akseleran.co.id/blog/wp-content/uploads/2022/10/download-1.png"/>`,
                    `<p>Adiksi game atau kecanduan game adalah perilaku seseorang untuk bermain game secara terus- menerus karena tidak mampu mengontrol diri dengan baik. Seseorang dengan adiksi game lebih mementingkan bermain game dibandingkan kegiatan lainnya dan tetap bermain game meskipun sudah mengalami efek negatif.<p>`,
                ],
                nextId: 2,
                prevId: null,
            },
        ]
    },
    {
        id: 2,
        title: 'Akibat negatif game online',
        status: 2, //on going
        materi: [
            {
                id: 1,
                thumbnail: 'link',
                contents: [
                    `<ul>
                        <li>
                            <p>Penurunan prestasi akademik</p>
                        </li>
                        <li>
                            <p>Kesehatan:</p>
                            <ul>
                                <li>
                                    <p>Kesehatan fisik: nyeri tulang belakang dan leher, gangguan penglihatan dan gangguan pendengaran, masalah sendi dan tulang serta obesitas</p>
                                </li>
                                <li>
                                    <p>Kesehatan mental: sulit berkonsentrasi, cemas, depresi, agresivitas</p>
                                </li>   
                                <li>
                                    <p>Perilaku tidak sehat: gangguan pola tidur, kurang berolah raga, malas gerak</p>
                                </li>   
                            </ul>
                        </li>
                        <li> <p>Sosial ( Kurang interaksi dengan orang lain, isolasi diri )<p> </li>
                        <li> <p>Ekonomi ( Pengeluaran berlebih untuk bermain game )<p> </li>
                    </ul>
            `
                ],
                nextId: 3,
                prevId: 1,
            }
        ]
    },
    {
        id: 3,
        title: 'Cara mengatasi adiksi game online',
        status: 1, //locked
        materi: [
            {
                id: 1,
                thumbnail: 'link',
                contents: [
                    `
                        <ul>
                            <li>
                                <p>Membatasi waktu bermain game</p>
                            </li>
                            <li>
                                <p>Meletakan atau menjauhkan diri dari media/gadget untuk bermain game</p>
                            </li>
                            <li>
                                <p>Melakukan banyak aktivitas atau kegiatan positif</p>
                            </li>
                            <li>
                                <p>Uninstall game</p>
                            </li>
                            <li>
                                <p>Meminta bantuan orang lain atau ahli</p>
                            </li>
                            <li>
                                <p>Memperbanyak ibadah (solat, membaca Al Qur’an, berdoa)</p>
                            </li>
                        </ul>
`,
                ],
                nextId: 4,
                prevId: 2,
            }
        ]
    },
    {
        id: 4,
        title: 'Healthy gaming',
        status: 1, //locked
        materi: [
            {
                id: 1,
                thumbnail: 'link',
                contents: [
                    `<p>Healthy gaming</p>`,
                ],
                nextId: null,
                prevId: 3,
            }
        ]
    },
    { // last object will always show this object
        id: 2,
        title: 'Materi 2: Muraqabah',
        status: 'next'
    },
]

const MateriSub2 = [
    {
        id: 1,
        title: 'Pengertian Muraqabah',
        status: 3, //done
    },
    {
        id: 2,
        title: 'Manfaat Muraqabah',
        status: 2, //on going
    },
    {
        id: 3,
        title: 'Tahapan dalam pelaksanaan muraqabah',
        status: 1, //locked
    },
]

export { Materi, MateriSub1, MateriSub2 }