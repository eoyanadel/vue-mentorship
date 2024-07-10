import { Movie } from "../types/movie";

const base_url = 'https://image.tmdb.org/t/p/w500';

const dummyMovies: Movie[] = [
    {
        "adult": false,
        "backdrop_path": "/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg",
        "genre_ids": [
            16,
            10751,
            12,
            35
        ],
        "id": 1022789,
        "original_language": "en",
        "original_title": "Inside Out 2",
        "overview": "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.",
        "popularity": 4128.506,
        "poster_path": "/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
        "release_date": "2024-06-11",
        "title": "Inside Out 2",
        "video": false,
        "vote_average": 7.706,
        "vote_count": 1291,
        "image_path": `${base_url}/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg`
    },
    {
        "adult": false,
        "backdrop_path": "/wNAhuOZ3Zf84jCIlrcI6JhgmY5q.jpg",
        "genre_ids": [
            28,
            12,
            878
        ],
        "id": 786892,
        "original_language": "en",
        "original_title": "Furiosa: A Mad Max Saga",
        "overview": "As the world fell, young Furiosa is snatched from the Green Place of Many Mothers and falls into the hands of a great Biker Horde led by the Warlord Dementus. Sweeping through the Wasteland they come across the Citadel presided over by The Immortan Joe. While the two Tyrants war for dominance, Furiosa must survive many trials as she puts together the means to find her way home.",
        "popularity": 4115.719,
        "poster_path": "/iADOJ8Zymht2JPMoy3R7xceZprc.jpg",
        "release_date": "2024-05-22",
        "title": "Furiosa: A Mad Max Saga",
        "video": false,
        "vote_average": 7.7,
        "vote_count": 1688,
        "image_path": `${base_url}/iADOJ8Zymht2JPMoy3R7xceZprc.jpg`
    },
    {
        "adult": false,
        "backdrop_path": "/fqv8v6AycXKsivp1T5yKtLbGXce.jpg",
        "genre_ids": [
            878,
            12,
            28
        ],
        "id": 653346,
        "original_language": "en",
        "original_title": "Kingdom of the Planet of the Apes",
        "overview": "Several generations in the future following Caesar's reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.",
        "popularity": 1777.192,
        "poster_path": "/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
        "release_date": "2024-05-08",
        "title": "Kingdom of the Planet of the Apes",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 1291,
        "image_path": `${base_url}/gKkl37BQuKTanygYQG1pyYgLVgf.jpg`
    },
    {
        "adult": false,
        "backdrop_path": "/gRApXuxWmO2forYTuTmcz5RaNUV.jpg",
        "genre_ids": [
            28,
            80,
            53,
            35
        ],
        "id": 573435,
        "original_language": "en",
        "original_title": "Bad Boys: Ride or Die",
        "overview": "After their late former Captain is framed, Lowrey and Burnett try to clear his name, only to end up on the run themselves.",
        "popularity": 1329.004,
        "poster_path": "/nP6RliHjxsz4irTKsxe8FRhKZYl.jpg",
        "release_date": "2024-06-05",
        "title": "Bad Boys: Ride or Die",
        "video": false,
        "vote_average": 7.025,
        "vote_count": 477,
        "image_path": `${base_url}/nP6RliHjxsz4irTKsxe8FRhKZYl.jpg`
    },
    {
        "adult": false,
        "backdrop_path": "/aATi2PtaOQCVAquCym6OU0Z4FjY.jpg",
        "genre_ids": [
            28,
            80,
            53
        ],
        "id": 704673,
        "original_language": "en",
        "original_title": "Trigger Warning",
        "overview": "A Special Forces commando uncovers a dangerous conspiracy when she returns to her hometown looking for answers into her beloved father's death.",
        "popularity": 1205.913,
        "poster_path": "/6XJM3C47iGOK9nFU6yLFCSf4U5c.jpg",
        "release_date": "2024-06-20",
        "title": "Trigger Warning",
        "video": false,
        "vote_average": 5.779,
        "vote_count": 240,
        "image_path": `${base_url}/6XJM3C47iGOK9nFU6yLFCSf4U5c.jpg`
    },
    {
        "adult": false,
        "backdrop_path": "/j29ekbcLpBvxnGk6LjdTc2EI5SA.jpg",
        "genre_ids": [
            16,
            10751,
            12,
            18,
            35
        ],
        "id": 150540,
        "original_language": "en",
        "original_title": "Inside Out",
        "overview": "When 11-year-old Riley moves to a new city, her Emotions team up to help her through the transition. Joy, Fear, Anger, Disgust and Sadness work together, but when Joy and Sadness get lost, they must journey through unfamiliar places to get back home.",
        "popularity": 1320.405,
        "poster_path": "/2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg",
        "release_date": "2015-06-17",
        "title": "Inside Out",
        "video": false,
        "vote_average": 7.915,
        "vote_count": 21034,
        "image_path": `${base_url}/2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg`
    },
];

export default dummyMovies;