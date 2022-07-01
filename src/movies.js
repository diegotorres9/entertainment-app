const movies = [
    {
        "title": "Beyond Earth",
        "thumbnail": {
          "trending": {
            "small": "./assets/thumbnails/beyond-earth/trending/small.jpg",
            "large": "./assets/thumbnails/beyond-earth/trending/large.jpg"
          },
          "regular": {
            "small": "./assets/thumbnails/beyond-earth/regular/small.jpg",
            "medium": "./assets/thumbnails/beyond-earth/regular/medium.jpg",
            "large": "./assets/thumbnails/beyond-earth/regular/large.jpg"
          }
        },
        "year": 2019,
        "category": "Movie",
        "rating": "PG",
        "isBookmarked": false,
        "isTrending": true
    },
    {
        "title": "Bottom Gear",
        "thumbnail": {
            "trending": {
            "small": "./assets/thumbnails/bottom-gear/trending/small.jpg",
            "large": "./assets/thumbnails/bottom-gear/trending/large.jpg"
            },
            "regular": {
            "small": "./assets/thumbnails/bottom-gear/regular/small.jpg",
            "medium": "./assets/thumbnails/bottom-gear/regular/medium.jpg",
            "large": "./assets/thumbnails/bottom-gear/regular/large.jpg"
            }
        },
        "year": 2021,
        "category": "Movie",
        "rating": "PG",
        "isBookmarked": false,
        "isTrending": true
    },
    {
        "title": "1998",
        "thumbnail": {
          "trending": {
            "small": "./assets/thumbnails/1998/trending/small.jpg",
            "large": "./assets/thumbnails/1998/trending/large.jpg"
          },
          "regular": {
            "small": "./assets/thumbnails/1998/regular/small.jpg",
            "medium": "./assets/thumbnails/1998/regular/medium.jpg",
            "large": "./assets/thumbnails/1998/regular/large.jpg"
          }
        },
        "year": 2021,
        "category": "Movie",
        "rating": "18+",
        "isBookmarked": false,
        "isTrending": true
    },
    {
        "title": "The Great Lands",
        "thumbnail": {
          "regular": {
            "small": "./assets/thumbnails/the-great-lands/regular/small.jpg",
            "medium": "./assets/thumbnails/the-great-lands/regular/medium.jpg",
            "large": "./assets/thumbnails/the-great-lands/regular/large.jpg"
          }
        },
        "year": 2019,
        "category": "Movie",
        "rating": "E",
        "isBookmarked": false,
        "isTrending": false
    },
    {
        "title": "Earth’s Untouched",
        "thumbnail": {
          "regular": {
            "small": "./assets/thumbnails/earths-untouched/regular/small.jpg",
            "medium": "./assets/thumbnails/earths-untouched/regular/medium.jpg",
            "large": "./assets/thumbnails/earths-untouched/regular/large.jpg"
          }
        },
        "year": 2017,
        "category": "Movie",
        "rating": "18+",
        "isBookmarked": true,
        "isTrending": false
    },
    {
        "title": "No Land Beyond",
        "thumbnail": {
          "regular": {
            "small": "./assets/thumbnails/no-land-beyond/regular/small.jpg",
            "medium": "./assets/thumbnails/no-land-beyond/regular/medium.jpg",
            "large": "./assets/thumbnails/no-land-beyond/regular/large.jpg"
          }
        },
        "year": 2019,
        "category": "Movie",
        "rating": "E",
        "isBookmarked": false,
        "isTrending": false
    },
    {
        "title": "Same Answer II",
        "thumbnail": {
          "regular": {
            "small": "./assets/thumbnails/same-answer-2/regular/small.jpg",
            "medium": "./assets/thumbnails/same-answer-2/regular/medium.jpg",
            "large": "./assets/thumbnails/same-answer-2/regular/large.jpg"
          }
        },
        "year": 2017,
        "category": "Movie",
        "rating": "E",
        "isBookmarked": false,
        "isTrending": false
    },
    {
        "title": "Relentless",
        "thumbnail": {
          "regular": {
            "small": "./assets/thumbnails/relentless/regular/small.jpg",
            "medium": "./assets/thumbnails/relentless/regular/medium.jpg",
            "large": "./assets/thumbnails/relentless/regular/large.jpg"
          }
        },
        "year": 2017,
        "category": "Movie",
        "rating": "PG",
        "isBookmarked": true,
        "isTrending": false
    },
    {
        "title": "Van Life",
        "thumbnail": {
          "regular": {
            "small": "./assets/thumbnails/van-life/regular/small.jpg",
            "medium": "./assets/thumbnails/van-life/regular/medium.jpg",
            "large": "./assets/thumbnails/van-life/regular/large.jpg"
          }
        },
        "year": 2015,
        "category": "Movie",
        "rating": "PG",
        "isBookmarked": false,
        "isTrending": false
    },
    {
        "title": "The Heiress",
        "thumbnail": {
          "regular": {
            "small": "./assets/thumbnails/the-heiress/regular/small.jpg",
            "medium": "./assets/thumbnails/the-heiress/regular/medium.jpg",
            "large": "./assets/thumbnails/the-heiress/regular/large.jpg"
          }
        },
        "year": 2021,
        "category": "Movie",
        "rating": "PG",
        "isBookmarked": true,
        "isTrending": false
    },
    {
        "title": "Off the Track",
        "thumbnail": {
          "regular": {
            "small": "./assets/thumbnails/off-the-track/regular/small.jpg",
            "medium": "./assets/thumbnails/off-the-track/regular/medium.jpg",
            "large": "./assets/thumbnails/off-the-track/regular/large.jpg"
          }
        },
        "year": 2017,
        "category": "Movie",
        "rating": "18+",
        "isBookmarked": true,
        "isTrending": false
    },
    {
        "title": "Whispering Hill",
        "thumbnail": {
          "regular": {
            "small": "./assets/thumbnails/whispering-hill/regular/small.jpg",
            "medium": "./assets/thumbnails/whispering-hill/regular/medium.jpg",
            "large": "./assets/thumbnails/whispering-hill/regular/large.jpg"
          }
        },
        "year": 2017,
        "category": "Movie",
        "rating": "E",
        "isBookmarked": false,
        "isTrending": false
    },
    {
        "title": "Lone Heart",
        "thumbnail": {
          "regular": {
            "small": "./assets/thumbnails/lone-heart/regular/small.jpg",
            "medium": "./assets/thumbnails/lone-heart/regular/medium.jpg",
            "large": "./assets/thumbnails/lone-heart/regular/large.jpg"
          }
        },
        "year": 2017,
        "category": "Movie",
        "rating": "E",
        "isBookmarked": true,
        "isTrending": false
    },
    {
        "title": "Darker",
        "thumbnail": {
          "regular": {
            "small": "./assets/thumbnails/darker/regular/small.jpg",
            "medium": "./assets/thumbnails/darker/regular/medium.jpg",
            "large": "./assets/thumbnails/darker/regular/large.jpg"
          }
        },
        "year": 2017,
        "category": "Movie",
        "rating": "18+",
        "isBookmarked": true,
        "isTrending": false
    },
    {
        "title": "Mission: Saturn",
        "thumbnail": {
          "regular": {
            "small": "./assets/thumbnails/mission-saturn/regular/small.jpg",
            "medium": "./assets/thumbnails/mission-saturn/regular/medium.jpg",
            "large": "./assets/thumbnails/mission-saturn/regular/large.jpg"
          }
        },
        "year": 2017,
        "category": "Movie",
        "rating": "PG",
        "isBookmarked": true,
        "isTrending": false
    }
];

export default movies;