import React, {useState} from "react"
import ReactPlayer from "react-player";
import { v4 as uuidv4 } from "uuid";

const PersonalBests = () => {

    //can add more links if needed
    const dropOptions = [
        {
            id:uuidv4(),
            text:"Super Mario 64",
        },{
            id:uuidv4(),
            text:"SM64 Romhacks",
        },{
            id:uuidv4(),
            text:"Smash Bros.",
        },{
            id:uuidv4(),
            text:"Metroid",
        },{
            id:uuidv4(),
            text:"Zelda",
        },{
            id:uuidv4(),
            text:"Pokemon",
        },{
            id:uuidv4(),
            text:"Nier Automata",
        },{
            id:uuidv4(),
            text:"Kingdom Hearts",
        },{
            id:uuidv4(),
            text:"Deltarune",
        },{
            id:uuidv4(),
            text:"Soul Calibur",
        },{
            id:uuidv4(),
            text:"SNES",
        },{
            id:uuidv4(),
            text:"Other",
        },

    ]

    const selectDropDown = name => {
        setDropName(name);
    }

    const [dropName, setDropName] = useState("Super Mario 64");


    //can add more links if needed
    const links = [
        {
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=oMU8sEqopC0",
            text:"Blindfolded Super Mario 64 - 70 Star",
            time:"1:44:28",
            game: "Super Mario 64",
            strats: "https://docs.google.com/document/d/11E6JE_EHMTXxLFJJlGdLjKPXnBWxf0wQLPKo7YxK3OQ/edit?usp=sharing",
        },{
            id:uuidv4(),
            url:"https://www.youtube.com/watch?v=jIJy6fEIS28",
            text:"Blindfolded Super Mario 64 - 16 Star",
            time:"28:16",
            game: "Super Mario 64",
            strats: "https://docs.google.com/document/d/1GraK_RDofjT4NARfU3YMjeeP_-aN9KdRaeHrCKWGStI/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=vxqsw4JFF0I",
            text:"Blindfolded Super Mario 64 - 1 Star",
            time:"24:16",
            game: "Super Mario 64",
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=bHCEg76icEU",
            text:"Blindfolded Super Mario 64 - 50 Star",
            time:"1:06:58",
            game: "Super Mario 64",
            strats: "https://docs.google.com/document/d/11E6JE_EHMTXxLFJJlGdLjKPXnBWxf0wQLPKo7YxK3OQ/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=PEgcXK3_cMc",
            text:"Blindfolded Super Mario 64 - 31 Star",
            time:"46:08",
            game: "Super Mario 64",
            strats: "https://docs.google.com/document/d/11E6JE_EHMTXxLFJJlGdLjKPXnBWxf0wQLPKo7YxK3OQ/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=Ia0xUE8ff4A",
            text:"Blindfolded Super Mario 64 - Softlock%",
            time:"1:59",
            game: "Super Mario 64",
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=82bKQEHnRsc",
            text:"Blindfolded SM64 Sapphire - 0 Star",
            time:"9:39",
            game:"SM64 Romhacks",
            strats: "https://docs.google.com/document/d/1rt5K1jxegNlSasHU3sq6_jSJP0P3VAEBi8aGTIZ5Xqc/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=jo5GFKFEBv4",
            text:"Blindfolded Smash 64 - BTT (All Characters)",
            time:"6:20",
            game: "Smash Bros.",
            strats: "https://docs.google.com/document/d/1vW1YZklN8LcWREbsovE_CH_3eDxSpHCT_-MGnOpKD4I/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=Bzt44ZglQ6M",
            text:"Blindfolded Ocarina of Time - any%",
            time:"50:32",
            game: "Zelda",
            strats: "https://docs.google.com/document/d/14Sx-awvZ1Tu9bLePAVRnV3rMVHiH8VsmEIIDsjY-rl8/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=lWWMBsy0bZs",
            text:"Blindfolded Metroid: Fusion - 100%",
            time:"2:32:41",
            game: "Metroid",
            strats: "https://docs.google.com/document/d/1mY1GZSxnWpiFA8PdthcmxYlcQINqxHc17j9XPVqxqDY/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=kvXdmW0NFNw",
            text:"Blindfolded Pokemon Red - any% Glitchless",
            time:"3:14:39",
            game: "Pokemon",
            strats: "https://docs.google.com/document/d/1VzouviRS7AWR0mY2EJCPv_kpGZUZqsOzS2_wHRCAlXY/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=xNy6KeJ_dqo",
            text:"Blindfolded Metroid: Zero Mission - any%",
            time:"1:22:46",
            game: "Metroid",
            strats: "https://docs.google.com/document/d/1PBdFDutYWLkpy6ikQ51Q8m3mnsCgHNsOLPulADJ2QiA/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=dqY8pJwVjgQ",
            text:"Blindfolded Rhythm Tengoku - any%",
            time:"1:04:40",
            game: "Other",
            strats: "https://docs.google.com/document/d/1uUHlsCEEVQG9fYUvBwHVWOvdZAj9IMeFj3jkwCOkr_w/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=0zSqp5e9kl0",
            text:"Blindfolded Smash Melee - Adventure Mode",
            time:"8:51",
            game: "Smash Bros.",
            strats: "https://docs.google.com/document/d/1cKhqEjWPhSnqGBLX3XXyY1eCpSwa3JU4YI9hR_0yJWY/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=8KAQPvAloWE",
            text:"Blindfolded Super Captain Falcon 64 - 1 Star",
            time:"9:29",
            game: "SM64 Romhacks",
            strats: "https://docs.google.com/document/d/1fLhSaZAwN8tK1_Kh4izH2g1Um3xeuT3UPf3ZOoJ1iBU/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=ueVFXwcXMZw",
            text:"Blindfolded Scrooge 64 - 1 Star",
            time:"1:47",
            game: "SM64 Romhacks",
            strats: "https://docs.google.com/document/d/1-sljVvO5AD_Lt3gZu0lSDT4rW7_PZH8dQ9zH8cnMVoE/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=0aKRd2xibmc",
            text:"Blindfolded Nier Automata - [A] Ending",
            time:"2:46:54 Loadless",
            game: "Nier Automata",
            strats: "https://docs.google.com/document/d/1TcYyVGBTutQlg4FWUNPo1piWEwRnXNymle51-epK6hU/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=MkbSmvm1Q1M",
            text:"Blindfolded Pokemon Blue - any% NSC",
            time:"16:01",
            game: "Pokemon",
            strats: "https://docs.google.com/document/d/1qtj_60EJ89MIsYDLBuRZcCy_Ag22Vh5B2MelwOxkbJ8/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=5bLdXyD5qiw",
            text:"Blindfolded Kingdom Hearts 2 - any% Beginner",
            time:"6:36:47",
            game: "Kingdom Hearts",
            strats: "https://docs.google.com/document/d/1e_qLs4Da1K4GWcR3rMOhBW74k7l6C8YxaaghrFB8JgA/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=6Z6lG4wQwNQ",
            text:"Blindfolded Deltarune - any% NG+",
            time:"34:04",
            game: "Deltarune",
            strats: "https://docs.google.com/document/d/1rWVd-6CySag7E4ZclTiKdShgJVEzz6T9zI0GvtuzcbM/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=Pivz3wWBg1g",
            text:"Blindfolded Deltarune - any% NG+ TP",
            time:"34:16",
            game: "Deltarune",
            strats: "https://docs.google.com/document/d/1rWVd-6CySag7E4ZclTiKdShgJVEzz6T9zI0GvtuzcbM/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=VBputJIq9w4",
            text:"Blindfolded Deltarune - any% NG+ TPTR",
            time:"39:32",
            game:"Deltarune",
            strats: "https://docs.google.com/document/d/1rWVd-6CySag7E4ZclTiKdShgJVEzz6T9zI0GvtuzcbM/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=kR_E8w3kIOs",
            text:"Blindfolded Deltarune - any% NG+ TR",
            time:"38:08",
            game:"Deltarune",
            strats: "https://docs.google.com/document/d/1rWVd-6CySag7E4ZclTiKdShgJVEzz6T9zI0GvtuzcbM/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=LnKyTetaMNY",
            text:"Blindfolded Nier Automata - [E] Ending",
            time:"10:08:06",
            game:"Nier Automata",
            strats: "https://docs.google.com/document/d/1PHWj6uaxXc_zbW0MC3bxburZ_IrSt2b11wv6WGanXz0/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=QhUTKnTu6zA",
            text:"Blindfolded Final Fantasy 3 - any%",
            time:"8:01",
            game:"Other",
            strats: "https://docs.google.com/document/d/1SL2W8o5yrwVeWFZG-DIHrX9nkt2R4I9PJLLcOsCg45w/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=wUVNP3vrIbw",
            text:"Blindfolded Smash 64 - Classic Mode",
            time:"12:32",
            game:"Smash Bros.",
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=oZdXeHtjNoI",
            text:"Blindfolded Ib - Promise of Reunion",
            time:"54:40",
            game: "PC",
            strats: "https://docs.google.com/document/d/1ogsFKbVRMPEcltEYc6E4c0irnchgvJwpUOnyPym8pVk/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=YOTWE9aEmtc",
            text:"Blindfolded Kingdom Hearts 1 - any% Beginner",
            time:"7:56:39",
            game: "Kingdom Hearts",
            strats: "https://docs.google.com/document/d/1hYbz6mrbO4uAuZLMnXEJ06VPCP-ENt88iZuuhk09Sco/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=s14ZFFBgopQ",
            text:"Blindfolded Metroid: Fusion - any%",
            time:"2:00:05",
            game: "Metroid",
            strats: "https://docs.google.com/document/d/1mY1GZSxnWpiFA8PdthcmxYlcQINqxHc17j9XPVqxqDY/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=y-FLd9_J6BM",
            text:"Blindfolded A Link to the Past - any%",
            time:"3:40",
            game: "Zelda",
            strats: "https://docs.google.com/document/d/1p3xwLIME6cD_mydxHxkQLDpgLaxHfL1iVT9GIEfu-pE/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=gRkmmTbE2Go",
            text:"Blindfolded Metroid: Zero Mission - 100%",
            time:"3:11:42",
            game: "Metroid",
            strats: "https://docs.google.com/document/d/1NHbt-pTeZdkyaEHHOI4IzZ92r0W81qwF4PuVh4w9lnQ/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=ryV7JeqFrV4",
            text:"Blindfolded Wario Land 2 - any% Glitchless",
            time:"16:00",
            game: "Other",
            strats: "https://docs.google.com/document/d/18tzAfn0qcclNw-e94WuRfSHdUMjT6erhv8rFZY4WAKE/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=oMc0oANwUnY",
            text:"Blindfolded Pokemon Yellow - any%",
            time:"1:57",
            game: "Pokemon",
            strats: "https://docs.google.com/document/d/1JSOeb7_5Zm3yKEf7rI00HWnO6z0OkXwwSFH9hc-tQh0/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=iWYqV0VJomk",
            text:"Blindfolded Kingdom Hearts 3 - Olymp%",
            time:"1:03:32",
            game: "Kingdom Hearts",
            strats: "https://docs.google.com/document/d/11x9joUfbHD-2OEoLOq7kpPU3QHOVzATpvUCDxfs-amc/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=jLEC2ZhNCt0",
            text:"Blindfolded Kingdom Hearts 0.2 - any% Beginner",
            time:"41:38",
            game: "Kingdom Hearts",
            strats: "https://docs.google.com/document/d/1Q4ltZ-78LhslpJBNVI5DnFF0VphOs-wxiSyVjYFbWDM/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=BuNhoeHily4",
            text:"Blindfolded Asura's Wrath - New Game Easy",
            time:"2:59:31",
            game: "Other",
            strats: "https://docs.google.com/document/d/12BF7GVouBVKkCxhGG07XbK10SsIEsBJXFna12kkaqE4/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=x4Ikd6V4Hes",
            text:"Blindfolded Wii Sports - Golf: 9 Holes",
            time:"9:07",
            game: "Other",
            strats: "https://docs.google.com/document/d/1WzZmXPbtjJSDrpWzsggAeIuBuv--ISgaqp1sBg0DzyI/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=Dr28GwRzzaM",
            text:"Blindfolded Nier Automata - [A] Ending (Normal)",
            time:"3:11:22",
            game:"Nier Automata",
            strats: "https://docs.google.com/document/d/1cEXR4_9MnXR53rMac5mWYlqujA59ucbHFjBVgqh_cJM/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=rcu6dB66jjo",
            text:"Blindfolded Nier Automata - Mac[K]erel",
            time:"24:52",
            game:"Nier Automata",
            strats: "https://docs.google.com/document/d/1oX42f9RX2k_aVfWUjDolqmSc7fbr2owhQNmjCSzekas/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=EHtHDzbfPX4",
            text:"Blindfolded Sailor Moon - Easy% Venus",
            time:"8:32",
            game:"SNES",
            strats: "https://docs.google.com/document/d/1pE3XGMCljSDZkcUXbJcI6980oV1lxY5rHccIontpm1I/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=bExGtiQB1AU",
            text:"Blindfolded Survival Kids - Ending 3",
            time:"3:37",
            game:"Other",
            strats: "https://docs.google.com/document/d/1vIlviJrtOzLJQN0yt9kmlgpfx1RUNvvvU5LEr8_bmzs/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=PFxsrxR30ts",
            text:"Blindfolded Sailor Moon R - Easy%",
            time:"10:30",
            game:"SNES",
            strats: "https://docs.google.com/document/d/1MLvndBzAKIHfWmGHnv-Grsj0h6WZ1ubLZYboB4Yqpaw/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=CxloIkJBjY4",
            text:"Blindfolded Super Tetris 2: Bombliss - Puzzle 0-20",
            time:"5:30",
            game:"SNES",
            strats: "https://docs.google.com/document/d/1I2zST5W2vT2kKfCZK7vTS4lhrpeEWOfYZcuVEN-pkDw/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=3E4cQHn-ofc",
            text:"Blindfolded Harvest Moon (SNES) - any%",
            time:"2:25",
            game:"SNES",
            strats: "https://docs.google.com/document/d/1mXdOJptyelucCv8AzP5gaHmxXNMze4taPhnTDLTzxAw/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=fKndR_8_s8Y",
            text:"Blindfolded Yoshi's Cookie - Round 1",
            time:"3:15",
            game:"SNES",
            strats: "https://docs.google.com/document/d/14ncGfZhy7dM5qaoH_PBHT4tKt80lVi82gcAyeohkg-4/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=I1dtwwmOZuI",
            text:"Blindfolded Barnie's Hide & Seek - any% No Controller",
            time:"9:37",
            game:"Other",
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=qk3vBWumWCA",
            text:"Blindfolded Metroid (NES) - Softlock%",
            time:"35.72",
            game:"Metroid",
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=c7RrK4oG_IE",
            text:"Blindfolded Ocarina of Time - Dank%",
            time:"25:03",
            game:"Zelda",
            strats: "https://docs.google.com/document/d/18MTbiDvJdX1R45lOBhTKueCMEI7xMA6ycIz4ugoc_os/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=cet6EpZ2WEc",
            text:"Blindfolded Soul Calibur 4 - Arcade",
            time:"7:17",
            game:"Soul Calibur",
            strats: "https://docs.google.com/document/d/1viKFwWB32jf-Yyonrj1oNnKpuBOhDjSMrhGg_3pcC8g/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=3zs7T4pvpgk",
            text:"Blindfolded Soul Calibur 4 - Story (Kilik)",
            time:"3:55",
            game:"Soul Calibur",
            strats: "https://docs.google.com/document/d/1viKFwWB32jf-Yyonrj1oNnKpuBOhDjSMrhGg_3pcC8g/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=m134XmtYAPE",
            text:"Blindfolded Soul Calibur 4 - Story (Original Kilik)",
            time:"5:38",
            game:"Soul Calibur",
            strats: "https://docs.google.com/document/d/1viKFwWB32jf-Yyonrj1oNnKpuBOhDjSMrhGg_3pcC8g/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=wdz538DO9lM",
            text:"Blindfolded Soul Calibur 4 - Story (Hard, Altered Kilik)",
            time:"5:55",
            game:"Soul Calibur",
            strats: "https://docs.google.com/document/d/1viKFwWB32jf-Yyonrj1oNnKpuBOhDjSMrhGg_3pcC8g/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=fyyQBevLwf4",
            text:"Blindfolded Nier Automata - Prologue",
            time:"18:39",
            game:"Nier Automata",
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=9hK57befoHk",
            text:"Blindfolded Smash 64 - 3x BTT (All Characters) ",
            time:"20:57",
            game:"Smash Bros.",
            strats: "https://docs.google.com/document/d/1vW1YZklN8LcWREbsovE_CH_3eDxSpHCT_-MGnOpKD4I/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=u12SO_t_bkg",
            text:"Blindfolded Nier Automata - Che[A]tcode%",
            time:"8:52",
            game:"Nier Automata",
            strats: "https://docs.google.com/document/d/176Dd_t8OkSk04BVJTnDPgyHnxw0gz7DDCOHBovU1NAQ/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=pBwvrY3jyqo",
            text:"Blindfolded Kirby 64 - Cheatcode any%",
            time:"5:22",
            game:"Other",
            strats: "https://docs.google.com/document/d/1_J9BPPs-vCvDYynB64VRRa-d9LPKXBQ1Z2CK87Ro-Wc/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=bcEWYMwK4VI",
            text:"Blindfolded The Witness - Secret Ending",
            time:"5:56",
            game:"Other",
            strats: "https://docs.google.com/document/d/1QNrMMXR6S7txSl-o-Kf68JiqOqPuPrFgzR72Y9WmojM/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=cLT0l-w_HgU",
            text:"Blindfolded Helltaker - Puzzle%",
            time:"3:05",
            game:"PC",
            strats: "https://docs.google.com/document/d/1LpOyVi4tPw7mUMlztO0qA4_Fg8DDWKY6730unBpYg7I/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=SBsiWLqHNh0",
            text:"Blindfolded Soul Calibur 2 - Arcade",
            time:"1:20.85",
            game:"Soul Calibur",
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=WPmhUPCm5C4",
            text:"Blindfolded Dead or Alive 2 - Story Mode",
            time:"12:27",
            game:"Other",
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=dy9uRF0Q5q8",
            text:"Blindfolded SM64 - Ztar Attack Rebooted - Luke Saward%",
            time:"3:51",
            game:"SM64 Romhacks",
            strats: "https://docs.google.com/document/d/1Libh_Mc0vfnWwmhdeBEz0MoP5FwhNCbVsJLEKohQlMI/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=stOCAV0v6qI",
            text:"Blindfolded Smash Melee - Classic Mode",
            time:"1:03:400",
            game:"Smash Bros.",
            strats: "https://docs.google.com/document/d/1cKhqEjWPhSnqGBLX3XXyY1eCpSwa3JU4YI9hR_0yJWY/edit?usp=sharing"
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=aF04IPI56wQ",
            text:"Blindfolded SM64 Randomizer - 1 Star",
            time:"1:37",
            game:"SM64 Romhacks",
        },{
            id:uuidv4(),
            url: "https://www.youtube.com/watch?v=0zSqp5e9kl0",
            text:"Blindfolded Smash Melee - All-Stars",
            time:"4:05",
            game:"Smash Bros.",
        },
    ]

    //looping through links to get individual items
    return (
        <div className="marathoncenter">
            <nav style={{ paddingLeft:"10%", position:"absolute", left:"-100px"}}>
                <ul className={`marathonNav.showMenu"`}>
                    <li className="sidebarTop">Selection</li>
                    {dropOptions.map(link => {
                        return(
                            <li className={`item ${dropName===link.text ? " active" : ""}`} key={link.id} onClick={() => selectDropDown(link.text)}>
                                <span style={{marginRight:"15px"}}>
                                    {link.text}
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <ul className="mainplayers">
                {links.map(link => {
                    if (dropName === link.game){
                        return(
                            <li key={link.id}>
                                <h4 className="cleanfont">{link.text} in {link.time} {link.strats != null ? <a  href={link.strats} target="_blank" rel="noreferrer">(Strats)</a> : ""}
                                </h4>
                                <ReactPlayer url={link.url} controls="true"/>
                                <br/>
                            </li>
                        )
                    }
                    //TODO else case default in case of error?
                })}
            </ul>
        </div>
    )
}
export default PersonalBests