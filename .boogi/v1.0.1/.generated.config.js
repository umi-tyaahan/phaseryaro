module.exports = {
    "metadata": {
        "name": "PhaserYaro!",
        "short_name": "phaseryaro",
        "description": "ゲーム開発フレームワークPhaserでの、ゲームを制作に関わる情報をまとめたサイトです。マルチプラットフォーム対応のHTML5ゲームを作ります。",
        "language": "ja",
        "url": "https://phaseryaro.app.dev",
        "pathPrefix": "/",
        "gaTrackingId": "G-8DE6GCWPFG",
        "siteImage": null,
        "favicon": "/assets/logo.svg",
        "themeColor": "#0066cc"
    },
    "header": {
        "logo": "/assets/logo.png",
        "logoLink": "/",
        "helpUrl": "",
        "links": [
            {
                "text": "Phaserでのゲーム制作に関わる情報をまとめたサイトです",
                "link": "text"
            }
        ],
        "enabled": true
    },
    "sidebar": {
        "enabled": true,
        "ignoreIndex": false,
        "forcedNavOrder": [],
        "expanded": [],
        "groups": [
            {
                "order": 1,
                "path": "/whatsnew",
                "title": ":rocket: 最近のネタ"
            },
            {
                "order": 10,
                "path": "/nyumon",
                "title": ":mortar_board: Phaser入門"
            },
            {
                "order": 20,
                "path": "/effects",
                "title": ":flower_playing_cards: ゲーム演出"
            },
            {
                "order": 30,
                "path": "/assets",
                "title": ":art: ゲーム素材"
            },
            {
                "order": 40,
                "path": "/Implementation",
                "title": ":joystick: ゲーム実装"
            },
            {
                "order": 50,
                "path": "/design",
                "title": ":space_invader: ゲームデザイン"
            },
            {
                "order": 99,
                "path": "/Others",
                "title": ":wrench: その他"
            }
        ],
        "links": [
            {
                "text": "Phaser",
                "link": "https://phaser.io/"
            },
            {
                "text": "Examples",
                "link": "https://labs.phaser.io/"
            },
            {
                "text": "API Documents",
                "link": "https://photonstorm.github.io/phaser3-docs/"
            },
            {
                "text": "Boogi",
                "link": "https://boogi.netlify.app/"
            }
        ],
        "poweredBy": {}
    },
    "pwa": {
        "enabled": false,
        "manifest": {
            "name": "BooGi",
            "short_name": "BooGi",
            "start_url": "/",
            "background_color": "#6b37bf",
            "theme_color": "#6b37bf",
            "display": "minimal-ui",
            "crossOrigin": "anonymous",
            "icon": "/assets/logo.svg"
        }
    },
    "social": {
        "facebook": "",
        "github": "https://github.com/umi-tyaahan",
        "gitlab": "",
        "instagram": "",
        "linkedin": "",
        "mail": "",
        "gmail": "",
        "slack": "",
        "twich": "",
        "twitter": "https://twitter.com/umityaahan",
        "youtube": ""
    },
    "features": {
        "editOnRepo": {
            "editable": false,
            "location": "http://localhost",
            "type": "github"
        },
        "search": {
            "enabled": false,
            "indexName": "docs",
            "algoliaAppId": null,
            "algoliaSearchKey": null,
            "algoliaAdminKey": null,
            "excerptSize": 20000,
            "engine": "localsearch",
            "placeholder": "Search",
            "startComponent": "icon",
            "debounceTime": 380,
            "snippetLength": 23,
            "hitsPerPage": 10,
            "showStats": true,
            "localSearchEngine": {
                "encode": "advanced",
                "tokenize": "full",
                "threshold": 2,
                "resolution": 30,
                "depth": 20
            },
            "pagination": {
                "enabled": true,
                "totalPages": 10,
                "showNext": true,
                "showPrevious": true
            }
        },
        "toc": {
            "show": true,
            "depth": 3
        },
        "previousNext": {
            "enabled": true,
            "arrowKeyNavigation": true
        },
        "scrollTop": true,
        "showMetadata": true,
        "propagateNetlifyEnv": true,
        "pageProgress": {
            "enabled": false,
            "excludePaths": [
                "/"
            ],
            "height": 3,
            "prependToBody": false,
            "color": "#A05EB5",
            "includePaths": [
                {
                    "regex": "^/"
                }
            ]
        },
        "mermaid": {
            "language": "mermaid",
            "theme": "dark",
            "options": {},
            "width": 300,
            "height": 300
        },
        "rss": {
            "enabled": false,
            "showIcon": true,
            "title": "My RSS feed",
            "copyright": "",
            "webMaster": "M",
            "managingEditor": "",
            "categories": [
                "GatsbyJS",
                "Docs"
            ],
            "ttl": "60",
            "matchRegex": "^/",
            "outputPath": "/rss.xml",
            "generator": "gidocs"
        },
        "darkMode": {
            "enabled": true,
            "default": false
        },
        "publishDraft": false,
        "fullScreenMode": {
            "enabled": true,
            "hideHeader": true,
            "hideToc": true,
            "hideSidebar": true
        }
    },
    "search": {
        "enabled": false
    }
};