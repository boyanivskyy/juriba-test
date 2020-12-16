import { ApiResponse } from './../../../models/dashboard.model';
import { DashboardActions } from './dashboard.actions';
import { ApiService } from '../services/api.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { DashboardPartialState } from './dashboard.reducer';

@Injectable()
export class DashboardEffects {
    getData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(DashboardActions.getData),
            switchMap(() =>
                this.apiService.getData().pipe(
                    map((result) =>
                        DashboardActions.getDataSuccess({
                            // items: this.mapItems(result),
                            // totalResults: result.pageInfo.totalResults,
                            // resultsPerPage: result.pageInfo.resultsPerPage,
                            items: this.mapItems(this.itemsData),
                            totalResults: 1000,
                            resultsPerPage: 50,
                        })
                    ),
                    catchError((errors) =>
                        of(
                            DashboardActions.getDataSuccess({
                                // items: this.mapItems(result),
                                // totalResults: result.pageInfo.totalResults,
                                // resultsPerPage: result.pageInfo.resultsPerPage,
                                items: this.mapItems(this.itemsData),
                                totalResults: 1000,
                                resultsPerPage: 50,
                            })
                        )
                    )
                )
            )
        )
    );

    getDataSuccess$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(DashboardActions.getDataSuccess),
                tap((items) => {
                    // Some code to show success message
                })
            ),
        { dispatch: false }
    );

    getDataFailed$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(DashboardActions.getDataFailed),
                tap((error) => {
                    // Handle error code here
                })
            ),
        { dispatch: false }
    );

    constructor(
        private actions$: Actions,
        private apiService: ApiService,
        private store$: Store<DashboardPartialState>
    ) {}

    private mapItems(data: ApiResponse) {
        return data?.items?.map((item) => ({ ...item, id: item.id.videoId }));
    }

    get itemsData() {
        return {
            kind: 'youtube#searchListResponse',
            etag: 'hcO2_hirIkCRSDYvc6H9SyIsqhI',
            nextPageToken: 'CDIQAA',
            regionCode: 'UA',
            pageInfo: {
                totalResults: 1000000,
                resultsPerPage: 50,
            },
            items: [
                {
                    kind: 'youtube#searchResult',
                    etag: 'ScFZ-ePyUjzEEphtqn4gTEg39Lc',
                    id: {
                        kind: 'youtube#video',
                        videoId: '3fumBcKC6RE',
                    },
                    snippet: {
                        publishedAt: '2011-05-12T20:01:31Z',
                        channelId: 'UCEOhcOACopL42xyOBIv1ekg',
                        title: 'Lil Wayne - John ft. Rick Ross (Explicit) (Official Music Video)',
                        description:
                            'Music video by Lil Wayne performing John. (C) 2011 Cash Money Records Inc.',
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/3fumBcKC6RE/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/3fumBcKC6RE/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/3fumBcKC6RE/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'LilWayneVEVO',
                        liveBroadcastContent: 'none',
                        publishTime: '2011-05-12T20:01:31Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: '39W6TkYYTF7WvgV9LSSTSPeDGFk',
                    id: {
                        kind: 'youtube#video',
                        videoId: 'K5dbyldy8hQ',
                    },
                    snippet: {
                        publishedAt: '2020-12-14T13:30:30Z',
                        channelId: 'UCAOcbyg6KNM2h99t7XNiQ8A',
                        title: '#13 Οι φιλίες δεν χαλάνε για τα σχόλια !!!',
                        description:
                            'Το βίντεο είναι σε συνεργασία με το E-food Κάνετε SUBSCRIBE στο κανάλι εδώ: http://bit.ly/KaneEggrafiStoKanali Βοήθησε το κανάλι εδώ: ...',
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/K5dbyldy8hQ/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/K5dbyldy8hQ/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/K5dbyldy8hQ/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'John Boursi',
                        liveBroadcastContent: 'none',
                        publishTime: '2020-12-14T13:30:30Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: 'empN6CPFFtzgaVIIywAS8uHyxF4',
                    id: {
                        kind: 'youtube#video',
                        videoId: 'XeRJuK4hCKo',
                    },
                    snippet: {
                        publishedAt: '2017-12-04T13:09:50Z',
                        channelId: 'UCtrEDjg4i0VKeIF9VPhMR0Q',
                        title: 'The Book of John | KJV | Audio Bible (FULL) by Alexander Scourby',
                        description:
                            'The Book of John read by Alexander Scourby. This is the King James Version of the Audio Bible. “This is being aired by permission of the copyright holder ...',
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/XeRJuK4hCKo/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/XeRJuK4hCKo/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/XeRJuK4hCKo/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'Good Hope',
                        liveBroadcastContent: 'none',
                        publishTime: '2017-12-04T13:09:50Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: '78Vcbn6kuDhHRFN1q6ijkYSGmpc',
                    id: {
                        kind: 'youtube#video',
                        videoId: 'sQfmpqdcLcc',
                    },
                    snippet: {
                        publishedAt: '2020-12-15T08:00:30Z',
                        channelId: 'UCMFQAxBnLWg3iigxdnKSyaQ',
                        title: 'John Mũ Cối -  Ba sọc ơi đồng chí tổng bí thư nước Mỹ kêu theo CS',
                        description:
                            'VietNamDongMauLac #VNDML #NhatKiYeuNuoc John Mũ Cối - Ba sọc ơi đồng chí tổng bí thư nước Mỹ kêu theo CS ☞ Mọi người ơi, hãy chia sẻ để người ...',
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/sQfmpqdcLcc/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/sQfmpqdcLcc/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/sQfmpqdcLcc/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'Việt Nam - Dòng Máu Lạc',
                        liveBroadcastContent: 'none',
                        publishTime: '2020-12-15T08:00:30Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: 'cfwAN15ygorA4MNkIT1hX_IeHL4',
                    id: {
                        kind: 'youtube#video',
                        videoId: 'fGWKIMwIqN8',
                    },
                    snippet: {
                        publishedAt: '2020-12-15T07:18:43Z',
                        channelId: 'UCPaP16WKqFt6BPT4k7SR8Ew',
                        title: 'Reaccionando a John Milton',
                        description:
                            'Mis redes sociales: https://www.instagram.com/paquito_maya/ https://twitter.com/paquito_maya https://www.facebook.com/standupaco/',
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/fGWKIMwIqN8/default_live.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/fGWKIMwIqN8/mqdefault_live.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/fGWKIMwIqN8/hqdefault_live.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'PAQUITO MAYA',
                        liveBroadcastContent: 'live',
                        publishTime: '2020-12-15T07:18:43Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: 'NpjIvrLfq-uWz5qyjY16Q8XXKo8',
                    id: {
                        kind: 'youtube#video',
                        videoId: 'G-2e9mMf7E8',
                    },
                    snippet: {
                        publishedAt: '2016-09-13T18:23:14Z',
                        channelId: 'UCVfwlh9XpX2Y_tQfjeln9QA',
                        title: 'Overview: John Ch. 1-12',
                        description:
                            'Watch our overview video on the Gospel of John, which breaks down the literary design of the book and its flow of thought. In John, Jesus becomes human as ...',
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/G-2e9mMf7E8/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/G-2e9mMf7E8/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/G-2e9mMf7E8/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'BibleProject',
                        liveBroadcastContent: 'none',
                        publishTime: '2016-09-13T18:23:14Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: 'yUUsMNwkZ9l754OUDMlpxK5Rst4',
                    id: {
                        kind: 'youtube#video',
                        videoId: 'dDgdTGuzenk',
                    },
                    snippet: {
                        publishedAt: '2020-12-10T01:50:13Z',
                        channelId: 'UCA0jl66sCRxfazPZnEUNEJw',
                        title:
                            'John Mũ cối trò chuyện cùng Việt Kiều Mỹ Nghĩa Trần hồi hương sống tại Củ Chi',
                        description:
                            'Facebook Thành Đông : https://www.facebook.com/mvtdtv/ *Email liên hệ : motvongt@gmail.com *Số Điện Thoại liên hệ : Video đã được đăng ký bản quyền với ...',
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/dDgdTGuzenk/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/dDgdTGuzenk/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/dDgdTGuzenk/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'Thành Đông',
                        liveBroadcastContent: 'none',
                        publishTime: '2020-12-10T01:50:13Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: 'kIMpi5lI1BnmRKrC20xl_K9kckI',
                    id: {
                        kind: 'youtube#video',
                        videoId: 'Bdsa_O628M0',
                    },
                    snippet: {
                        publishedAt: '2020-10-21T10:00:09Z',
                        channelId: 'UCEZ6QFA7F37E--lqew7wbAQ',
                        title: 'John Vuli Gate Challenge | with Katlehong Kids',
                        description:
                            'OM Dance Collab | Disrupt Videos | OMFilmsSA with Katlehong Kids. Website: https://www.omfilms.co.za Behind the Scenes: Coming Soon DANCERS ...',
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/Bdsa_O628M0/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/Bdsa_O628M0/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/Bdsa_O628M0/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'Ofentse Mwase Films',
                        liveBroadcastContent: 'none',
                        publishTime: '2020-10-21T10:00:09Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: 'ncSVj9pduER5KMJRBV-fwlM3WNQ',
                    id: {
                        kind: 'youtube#video',
                        videoId: 'P2NHpLvs2xU',
                    },
                    snippet: {
                        publishedAt: '2020-11-22T22:41:55Z',
                        channelId: 'UCzMzPGGVKpjZAJy1aOAUieA',
                        title:
                            'Mapara A Jazz - John Vuli Gate [Feat Ntosh Gazi &amp; Colano] (Official Music Video)',
                        description:
                            'A major hit Amapiano dance song by Mapara A Jazz taking South Africa, Africa & the world by storm through social media, dance floors and the streets. "John ...',
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/P2NHpLvs2xU/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/P2NHpLvs2xU/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/P2NHpLvs2xU/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'Openmic Productions',
                        liveBroadcastContent: 'none',
                        publishTime: '2020-11-22T22:41:55Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: 'BhLy-m63qam9Za8_e5xZVYWN60w',
                    id: {
                        kind: 'youtube#video',
                        videoId: '450p7goxZqg',
                    },
                    snippet: {
                        publishedAt: '2013-10-02T14:00:06Z',
                        channelId: 'UCNnnwVSI5Ndo2I4Y-LPuuew',
                        title: 'John Legend - All of Me (Official Video)',
                        description:
                            '"All of Me" by John Legend Listen to John Legend: https://JohnLegend.lnk.to/listenYD Subscribe to the official John Legend YouTube channel: ...',
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/450p7goxZqg/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/450p7goxZqg/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/450p7goxZqg/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'johnlegendVEVO',
                        liveBroadcastContent: 'none',
                        publishTime: '2013-10-02T14:00:06Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: 'zP6zagy1N0LW0v7P4Cc0utL74JU',
                    id: {
                        kind: 'youtube#video',
                        videoId: 'KvA1cmT2TYc',
                    },
                    snippet: {
                        publishedAt: '2020-06-24T14:00:11Z',
                        channelId: 'UC9rPALOT-ZVc7VEXATYSNCA',
                        title: 'john sleep',
                        description:
                            'on Twitter john → https://twitter.com/casablancalanca TOOBOE → https://twitter.com/TOOBOEofficial HP → http://tooboe.com/',
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/KvA1cmT2TYc/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/KvA1cmT2TYc/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/KvA1cmT2TYc/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'john / TOOBOE',
                        liveBroadcastContent: 'none',
                        publishTime: '2020-06-24T14:00:11Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: 'p1C30MKxN7lmf06Ze0sj96_YHgo',
                    id: {
                        kind: 'youtube#video',
                        videoId: 'CfihYWRWRTQ',
                    },
                    snippet: {
                        publishedAt: '2013-05-08T20:00:30Z',
                        channelId: 'UC7KqPOHnMTzdBjkbTQp5ebg',
                        title: 'John Newman - Love Me Again',
                        description:
                            "Debut album 'Tribute' is out now: https://JohnNewman.lnk.to/tributeID New album 'Revolve' is available to pre-order now (released 16th Oct 2015). Get signed ...",
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/CfihYWRWRTQ/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/CfihYWRWRTQ/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/CfihYWRWRTQ/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'JohnNewmanVEVO',
                        liveBroadcastContent: 'none',
                        publishTime: '2013-05-08T20:00:30Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: 'FiMFrsjAzPJ1zK4SvF3L_kaGUGE',
                    id: {
                        kind: 'youtube#video',
                        videoId: 'vipZMBGTUHc',
                    },
                    snippet: {
                        publishedAt: '2020-10-12T14:00:12Z',
                        channelId: 'UCNzsYU0aWwjERj-9Y9HUEng',
                        title:
                            'It’s Bath Time Baby John! | Bath Song | Little Angel Kids Songs &amp; Nursery Rhymes',
                        description:
                            'Baby John is covered in dirt and germs. Mommy wants him to take a bath and learn to be clean, but he refuses to do so. All Baby John wants to do is play games, ...',
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/vipZMBGTUHc/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/vipZMBGTUHc/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/vipZMBGTUHc/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'Little Angel: Nursery Rhymes & Kids Songs',
                        liveBroadcastContent: 'none',
                        publishTime: '2020-10-12T14:00:12Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: 'FWW4sf4Prk2oPw0SVOqNShII2Gw',
                    id: {
                        kind: 'youtube#video',
                        videoId: 'HzQffSn5LAk',
                    },
                    snippet: {
                        publishedAt: '2020-12-08T08:40:21Z',
                        channelId: 'UCcrq5ptwiAnVVT0wRVdJO7w',
                        title:
                            'JOHN LLOYD CRUZ UMIYAK NG MALAMANG SI PIOLO PASCUAL ANG AMA NG ANAK NILA NI ELLEN ADARNA',
                        description:
                            'JOHN LLOYD CRUZ UMIYAK NG MALAMANG SI PIOLO PASCUAL ANG AMA NG ANAK NILA NI ELLEN ADARNA FACEBOOK: ...',
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/HzQffSn5LAk/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/HzQffSn5LAk/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/HzQffSn5LAk/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'Showbiz News Update',
                        liveBroadcastContent: 'none',
                        publishTime: '2020-12-08T08:40:21Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: 'q1kjKMkHLDZJZjM-VOSRmjs5CjU',
                    id: {
                        kind: 'youtube#video',
                        videoId: 'en9ZkOo2rRA',
                    },
                    snippet: {
                        publishedAt: '2017-09-10T08:52:42Z',
                        channelId: 'UC4NALVCmcmL5ntpV0thoH6w',
                        title:
                            'Are You Sleeping (Brother John)? - Amazing Songs for Children | LooLoo Kids',
                        description:
                            "Are You Sleeping? Watch this super fun animated nursery rhyme created by LooLoo Kids and let's sing together Listen on SPOTIFY ...",
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/en9ZkOo2rRA/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/en9ZkOo2rRA/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/en9ZkOo2rRA/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: "LooLoo Kids - Nursery Rhymes and Children's Songs",
                        liveBroadcastContent: 'none',
                        publishTime: '2017-09-10T08:52:42Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: 'fP3k5LHaDzlXym65tW8MMsRRmR0',
                    id: {
                        kind: 'youtube#video',
                        videoId: 'H9bGITkIHmM',
                    },
                    snippet: {
                        publishedAt: '2019-08-15T13:00:14Z',
                        channelId: 'UC2Qw1dzXDBAZPwS7zm37g8g',
                        title: 'Sho Madjozi - John Cena | A COLORS SHOW',
                        description:
                            "South African based artist Sho Madjozi shares a vibrant performance of previously unreleased single 'John Cena' Follow ▷ Stream: ...",
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/H9bGITkIHmM/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/H9bGITkIHmM/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/H9bGITkIHmM/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'COLORS',
                        liveBroadcastContent: 'none',
                        publishTime: '2019-08-15T13:00:14Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: '_lporeIzHeh4Zb2f-rDcaKtHiiQ',
                    id: {
                        kind: 'youtube#video',
                        videoId: '3g7TZLaBknc',
                    },
                    snippet: {
                        publishedAt: '2020-11-04T06:00:09Z',
                        channelId: 'UCc77CW_DkpIjbyVInxQP1Kw',
                        title:
                            'Beki May Nahanap ng Jowa sa Omegle? | Omegle Prank 7.2 | John Fedellaga',
                        description:
                            "Hi mga Beks!! (WATCH IN HD!) For today's video mag hahanap unit tayo ng Jowa sa Omegle!! Beks! Make sure to subscribe to my channel and click the bell ...",
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/3g7TZLaBknc/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/3g7TZLaBknc/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/3g7TZLaBknc/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'John Fedellaga',
                        liveBroadcastContent: 'none',
                        publishTime: '2020-11-04T06:00:09Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: 'uiRUnDVTrbubino8cXV-5FH9zE4',
                    id: {
                        kind: 'youtube#video',
                        videoId: 'SDqQY2qMMxw',
                    },
                    snippet: {
                        publishedAt: '2012-10-31T03:02:34Z',
                        channelId: 'UCCXmpUg7EJTf8pDsEDQUKrQ',
                        title: 'The Holy Bible - Book 43 - John - KJV Dramatized Audio',
                        description:
                            'This is the holy book of John, known as "The Gospel According to Saint John". The recording is dramatized, from the King James Bible. This is, in my opinion, the ...',
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/SDqQY2qMMxw/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/SDqQY2qMMxw/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/SDqQY2qMMxw/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'tmantz625',
                        liveBroadcastContent: 'none',
                        publishTime: '2012-10-31T03:02:34Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: 'wwPk62LRfN_3nBOMyC1Lber0kqo',
                    id: {
                        kind: 'youtube#video',
                        videoId: 'iXvy8ZeCs5M',
                    },
                    snippet: {
                        publishedAt: '2012-03-13T07:00:07Z',
                        channelId: 'UCNnnwVSI5Ndo2I4Y-LPuuew',
                        title:
                            'John Legend - Tonight (Best You Ever Had) (Official Video) ft. Ludacris',
                        description:
                            '"Tonight (Best You Ever Had)" by John Legend feat. Ludacris Listen to John Legend: https://JohnLegend.lnk.to/listenYD Subscribe to the official John Legend ...',
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/iXvy8ZeCs5M/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/iXvy8ZeCs5M/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/iXvy8ZeCs5M/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'johnlegendVEVO',
                        liveBroadcastContent: 'none',
                        publishTime: '2012-03-13T07:00:07Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: 'BeA4pmpnPP9RxDvmbR4MGhHFq0g',
                    id: {
                        kind: 'youtube#video',
                        videoId: 'Juv2c0xgGno',
                    },
                    snippet: {
                        publishedAt: '2020-11-13T07:00:29Z',
                        channelId: 'UCa1yUHQmV6Z0PpAUtfgNd9g',
                        title: 'Christmas 2020 Ad | Give A Little Love | Waitrose &amp; John Lewis',
                        description:
                            "We believe that the world would be a better place if we all gave a little more love. So this year we're celebrating kindness, whether large or small, showing how ...",
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/Juv2c0xgGno/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/Juv2c0xgGno/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/Juv2c0xgGno/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'John Lewis & Partners',
                        liveBroadcastContent: 'none',
                        publishTime: '2020-11-13T07:00:29Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: 'aOT8_vWENIjXUevlhV3cZD9B060',
                    id: {
                        kind: 'youtube#video',
                        videoId: 'Dhxgf3wOIqY',
                    },
                    snippet: {
                        publishedAt: '2020-06-25T14:00:03Z',
                        channelId: 'UCJ5v_MCY6GNUBTO8-D3XoAg',
                        title: 'The Rock and John Cena&#39;s unforgettable history: WWE Playlist',
                        description:
                            "From their legendary war of words to an unlikely tag team and their WrestleMania showdowns, relive The Rock and John Cena's incredible history.",
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/Dhxgf3wOIqY/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/Dhxgf3wOIqY/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/Dhxgf3wOIqY/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'WWE',
                        liveBroadcastContent: 'none',
                        publishTime: '2020-06-25T14:00:03Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: 'T_jJBjB6fpIHYR5Ih-l0d7TMdIE',
                    id: {
                        kind: 'youtube#video',
                        videoId: 'IcmUlYFFxTs',
                    },
                    snippet: {
                        publishedAt: '2020-11-10T15:45:00Z',
                        channelId: 'UCJ5v_MCY6GNUBTO8-D3XoAg',
                        title:
                            'FULL MATCH - John Cena vs. Triple H vs. Shawn Michaels - WWE Title Match: Survivor Series 2009',
                        description:
                            "D-Generation X teammates Shawn Michaels and Triple H set their sights on John Cena's WWE Championship in an every-man-for-himself Triple Threat Match: ...",
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/IcmUlYFFxTs/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/IcmUlYFFxTs/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/IcmUlYFFxTs/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'WWE',
                        liveBroadcastContent: 'none',
                        publishTime: '2020-11-10T15:45:00Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: 'sxFYxPmx-1tPDCqg5UweG7HiFV4',
                    id: {
                        kind: 'youtube#video',
                        videoId: '05uzgBqPa5E',
                    },
                    snippet: {
                        publishedAt: '2020-12-08T06:00:10Z',
                        channelId: 'UCc77CW_DkpIjbyVInxQP1Kw',
                        title:
                            'Nakausap ko ang kumanta ng Magandang Dilag | JM Bales | John Fedellaga',
                        description:
                            "Hi mga Beks!! (WATCH IN HD!) For today's video may date tayo kay JM Bales Beks! Make sure to subscribe to my channel and click the bell button before ...",
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/05uzgBqPa5E/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/05uzgBqPa5E/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/05uzgBqPa5E/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'John Fedellaga',
                        liveBroadcastContent: 'none',
                        publishTime: '2020-12-08T06:00:10Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: 'ib_Q9c2MT3roODddtcGbp_OxY7E',
                    id: {
                        kind: 'youtube#video',
                        videoId: 'fJTBmCVaaTc',
                    },
                    snippet: {
                        publishedAt: '2020-03-08T14:00:10Z',
                        channelId: 'UCNzsYU0aWwjERj-9Y9HUEng',
                        title:
                            'Baby John To The Rescue | Wheels On The Ambulance &amp; More Little Angel Kids Songs',
                        description:
                            'When the family gets to the playground, Baby John becomes an ambulance driver. He decides to go out and save the day. Enjoy this version of the Wheels on ...',
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/fJTBmCVaaTc/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/fJTBmCVaaTc/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/fJTBmCVaaTc/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'Little Angel: Nursery Rhymes & Kids Songs',
                        liveBroadcastContent: 'none',
                        publishTime: '2020-03-08T14:00:10Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: 'lE87igHd_yj9GdGS2ocD3gz3ugo',
                    id: {
                        kind: 'youtube#video',
                        videoId: '279RNoP5UyU',
                    },
                    snippet: {
                        publishedAt: '2020-08-13T19:15:44Z',
                        channelId: 'UCNnnwVSI5Ndo2I4Y-LPuuew',
                        title: 'John Legend - Wild (feat. Gary Clark Jr.) (Official Video)',
                        description:
                            'Official video for "Wild" by John Legend & Gary Clark Jr. Listen & Download \'Bigger Love\' out now: https://found.ee/JLBiggerLoveAlbum Director - Nabil ...',
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/279RNoP5UyU/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/279RNoP5UyU/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/279RNoP5UyU/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'johnlegendVEVO',
                        liveBroadcastContent: 'none',
                        publishTime: '2020-08-13T19:15:44Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: 'K6exv5ShsZELqCW183pyDbve8-k',
                    id: {
                        kind: 'youtube#video',
                        videoId: 'LUmPzwLNiMk',
                    },
                    snippet: {
                        publishedAt: '2020-11-13T07:00:25Z',
                        channelId: 'UCPgLNge0xqQHWM5B5EFH9Cg',
                        title:
                            'Watch the John Lewis Christmas advert 2020: &#39;Give a Little Love&#39;',
                        description:
                            'Waitrose and John Lewis have unveiled their Christmas advert for 2020, inspired by acts of kindness by the public during the pandemic. The advert encourages ...',
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/LUmPzwLNiMk/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/LUmPzwLNiMk/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/LUmPzwLNiMk/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'The Telegraph',
                        liveBroadcastContent: 'none',
                        publishTime: '2020-11-13T07:00:25Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: 'm4hG5lySIq31DgGabqy8RbOb0kY',
                    id: {
                        kind: 'youtube#video',
                        videoId: 'TjJA12W-ULU',
                    },
                    snippet: {
                        publishedAt: '2020-12-10T01:15:22Z',
                        channelId: 'UCWcbcxHsZ15mB_h9r4UhG2g',
                        title: 'LA CASA DE LOS VENADOS | John Valverde',
                        description:
                            'Conozcan otro lugar único que hay por mis queridos y bello país. Suscríbanse al canal de mi amigo Miguel ...',
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/TjJA12W-ULU/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/TjJA12W-ULU/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/TjJA12W-ULU/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'John Valverde',
                        liveBroadcastContent: 'none',
                        publishTime: '2020-12-10T01:15:22Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: 'xdR5gwX5IVNjhAFsSjt6zMpxA_Y',
                    id: {
                        kind: 'youtube#video',
                        videoId: 'wLMDp-DM2Xo',
                    },
                    snippet: {
                        publishedAt: '2020-10-29T14:00:11Z',
                        channelId: 'UCNzsYU0aWwjERj-9Y9HUEng',
                        title:
                            'What’s Wrong Baby John? | Emotions Song | Little Angel Kids Songs &amp; Nursery Rhymes',
                        description:
                            'How will Baby John handle different emotions at the grocery store, playing soccer and even going for a swim. Thankfully his family is there to help! Enjoy this ...',
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/wLMDp-DM2Xo/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/wLMDp-DM2Xo/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/wLMDp-DM2Xo/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'Little Angel: Nursery Rhymes & Kids Songs',
                        liveBroadcastContent: 'none',
                        publishTime: '2020-10-29T14:00:11Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: 'xqtT_rpwI3qkMyawO_n3lNlZu_k',
                    id: {
                        kind: 'youtube#video',
                        videoId: 'GaMrxKkw_RM',
                    },
                    snippet: {
                        publishedAt: '2020-12-09T23:43:36Z',
                        channelId: 'UCmIqy8hFea4zxFom67ra32w',
                        title: 'El sueño de John Valverde',
                        description:
                            'UNA AVENTURA EN LOS PARAMOS DE JOHN VALVERDE JEJ Gracias por vernos, los queremos. Contacto/publicidad: ahorapitcontacto@gmail.com ...',
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/GaMrxKkw_RM/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/GaMrxKkw_RM/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/GaMrxKkw_RM/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'Ahora Pit',
                        liveBroadcastContent: 'none',
                        publishTime: '2020-12-09T23:43:36Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: 'XlGc5UQCnf3_87WlAVys3FZYGbo',
                    id: {
                        kind: 'youtube#video',
                        videoId: 'kHGS5Dkl6gs',
                    },
                    snippet: {
                        publishedAt: '2020-08-23T00:00:16Z',
                        channelId: 'UCdrHrQf0o0TO8YDntXJ4VIQ',
                        title:
                            'Lihat Album Foto Keluarga Yuk! 👪📷 Kumpulan Lagu Anak | Little Angel Bahasa Indonesia',
                        description:
                            'Lucunya foto Baby John ketika baru lahir! Baby John dan keluarganya bersama-sama melihat album foto keluarga. Ada kakak Jack dan Jill, dan juga ayah dan ...',
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/kHGS5Dkl6gs/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/kHGS5Dkl6gs/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/kHGS5Dkl6gs/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'Little Angel Bahasa Indonesia - Lagu Anak',
                        liveBroadcastContent: 'none',
                        publishTime: '2020-08-23T00:00:16Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: '_WcI0EPA6mm7R4MF48prHpjLncE',
                    id: {
                        kind: 'youtube#video',
                        videoId: 'c2Hjs3bHpmg',
                    },
                    snippet: {
                        publishedAt: '2020-12-07T04:58:49Z',
                        channelId: 'UCS73UIhzMTBfPY4HONLdKzw',
                        title: 'John McBride chia sẻ về sự việc Ngô Kỷ bị nhiễm covid 19',
                        description: '',
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/c2Hjs3bHpmg/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/c2Hjs3bHpmg/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/c2Hjs3bHpmg/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'MVTD - Một Vòng Trái Đất',
                        liveBroadcastContent: 'none',
                        publishTime: '2020-12-07T04:58:49Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: 'RIe-vPEbbBUpuN1sn7JKO_x-xQ8',
                    id: {
                        kind: 'youtube#video',
                        videoId: 'euj9D_nQmoA',
                    },
                    snippet: {
                        publishedAt: '2020-12-15T03:20:46Z',
                        channelId: 'UCpdK1NLHxEUGXc1gq2NxkTw',
                        title:
                            'John Holiday Sings His Original Song &quot;Where Do We Go&quot; - The Voice Live Finale Part 1 2020',
                        description:
                            'John Holiday performs the original song "Where Do We Go" during the Live Finale Part 1 on The Voice. » Get The Voice Official App: ...',
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/euj9D_nQmoA/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/euj9D_nQmoA/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/euj9D_nQmoA/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'The Voice',
                        liveBroadcastContent: 'none',
                        publishTime: '2020-12-15T03:20:46Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: 'lq2_GbbuTQHIjcQQiGtz3GM18ZY',
                    id: {
                        kind: 'youtube#video',
                        videoId: 'EZforRcwTko',
                    },
                    snippet: {
                        publishedAt: '2019-12-03T14:00:02Z',
                        channelId: 'UCNzsYU0aWwjERj-9Y9HUEng',
                        title:
                            'Baby John Does the Chicken Dance | Little Angel Nursery Rhymes &amp; Kids Songs',
                        description:
                            'Baby John puts his little chicken costume and gets ready for the animal costume party at the daycare. He shakes his little chicken tail and learns how to do the ...',
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/EZforRcwTko/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/EZforRcwTko/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/EZforRcwTko/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'Little Angel: Nursery Rhymes & Kids Songs',
                        liveBroadcastContent: 'none',
                        publishTime: '2019-12-03T14:00:02Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: 'pC22gXI6oiTKVYNA-DNQoAQytDU',
                    id: {
                        kind: 'youtube#video',
                        videoId: 'z3-Tm_aS3N0',
                    },
                    snippet: {
                        publishedAt: '2019-06-18T07:00:05Z',
                        channelId: 'UCbCmjCuTUZos6Inko4u57UQ',
                        title:
                            'John Jacob Jingleheimer Schmidt | CoComelon Nursery Rhymes &amp; Kids Songs',
                        description:
                            'Let\'s play "follow the leader". In this game, everyone follows and also leads. Subscribe for new videos every week: ...',
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/z3-Tm_aS3N0/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/z3-Tm_aS3N0/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/z3-Tm_aS3N0/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'Cocomelon - Nursery Rhymes',
                        liveBroadcastContent: 'none',
                        publishTime: '2019-06-18T07:00:05Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: 'oFmg-iWUfOg8I6t6Jq09BZD0RYk',
                    id: {
                        kind: 'youtube#video',
                        videoId: 'bWCW-Q6vRxg',
                    },
                    snippet: {
                        publishedAt: '2020-07-20T14:00:08Z',
                        channelId: 'UCFBO5h2l4Py0hXtSzETH7mw',
                        title:
                            'Be Brave Baby John |  Doctor Checkup | Little World - Kids Songs &amp; Nursery Rhymes',
                        description:
                            'Visiting a doctor can be a scary thing, but Baby John needs to learn about being brave. Through kids songs and nursery rhymes, the Doctor is able to help ...',
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/bWCW-Q6vRxg/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/bWCW-Q6vRxg/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/bWCW-Q6vRxg/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'Little World - Kids Songs & Nursery Rhymes',
                        liveBroadcastContent: 'none',
                        publishTime: '2020-07-20T14:00:08Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: '9g2nzND5F80or9HNycLrz2_V_-Q',
                    id: {
                        kind: 'youtube#video',
                        videoId: 'qIUb3bjh42Y',
                    },
                    snippet: {
                        publishedAt: '2020-12-07T04:00:05Z',
                        channelId: 'UC3XTzVzaHQEd30rQbuvCtTQ',
                        title:
                            'Pringles Update: Last Week Tonight with John Oliver (Web Exclusive)',
                        description:
                            'With the help of viewers at home, John tries to get to the bottom of an important mystery. Connect with Last Week Tonight online... Subscribe to the Last Week ...',
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/qIUb3bjh42Y/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/qIUb3bjh42Y/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/qIUb3bjh42Y/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'LastWeekTonight',
                        liveBroadcastContent: 'none',
                        publishTime: '2020-12-07T04:00:05Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: 'Rwx7-xi0oXEJSYlLtBX7Fr15kts',
                    id: {
                        kind: 'youtube#video',
                        videoId: 'cx4Xwae513g',
                    },
                    snippet: {
                        publishedAt: '2014-07-10T15:42:28Z',
                        channelId: 'UC6skOpWzyqC5AOTpg8V7Bow',
                        title:
                            'Force 2016 Full Movie | John Abraham | Vidyut Jamwal | Genelia D&#39;souza | Commando 2 full Movie Force',
                        description:
                            "2017 Hindi Full Movie Featuring Commando 2 Superstar Vidyut Jamwal in the new hindi movie Force Full Movie starring John Abraham who's now come back ...",
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/cx4Xwae513g/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/cx4Xwae513g/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/cx4Xwae513g/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'Unisys Music',
                        liveBroadcastContent: 'none',
                        publishTime: '2014-07-10T15:42:28Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: 'QPlpRbwUgGpTomnNEGoDa8ImRfs',
                    id: {
                        kind: 'youtube#video',
                        videoId: 'r9D-uvKih_k',
                    },
                    snippet: {
                        publishedAt: '2019-11-14T07:01:02Z',
                        channelId: 'UCa1yUHQmV6Z0PpAUtfgNd9g',
                        title:
                            'Christmas 2019 Ad | John Lewis &amp; Partners and Waitrose &amp; Partners',
                        description:
                            "Together with Waitrose & Partners, we're excited to share the festive tale of a little girl and her excitable friend, Edgar. #ExcitableEdgar Our story this year is all ...",
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/r9D-uvKih_k/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/r9D-uvKih_k/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/r9D-uvKih_k/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'John Lewis & Partners',
                        liveBroadcastContent: 'none',
                        publishTime: '2019-11-14T07:01:02Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: 'C83EmzNvZZ3f2gyyEmMZSnaYYQ8',
                    id: {
                        kind: 'youtube#video',
                        videoId: 'wJXAYqYYRwA',
                    },
                    snippet: {
                        publishedAt: '2020-12-15T04:30:18Z',
                        channelId: 'UCJ5v_MCY6GNUBTO8-D3XoAg',
                        title:
                            'Keith Lee vs. The Miz &amp; John Morrison – Handicap Match: Raw, Dec. 14, 2020',
                        description:
                            'Keith Lee looks to beat the odds as he takes on both The Miz and John Morrison in a Handicap Match. Catch WWE action on WWE Network, FOX, USA Network, ...',
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/wJXAYqYYRwA/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/wJXAYqYYRwA/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/wJXAYqYYRwA/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'WWE',
                        liveBroadcastContent: 'none',
                        publishTime: '2020-12-15T04:30:18Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: '98zuCsry9YGDnILNmCMPyS8N_QQ',
                    id: {
                        kind: 'youtube#video',
                        videoId: 'Ls87QJYLRH8',
                    },
                    snippet: {
                        publishedAt: '2020-04-05T00:00:10Z',
                        channelId: 'UCdrHrQf0o0TO8YDntXJ4VIQ',
                        title:
                            'Yuk Belajar Tarian Binatang! | Lagu Anak | Little Angel Bahasa Indonesia',
                        description:
                            'Asyiknya belajar gerakan dan suara binatang! Ibu guru mengecat muka Baby John dan teman-teman menjadi binatang lebah, tikus, kucing, macan, sapi, babi, ...',
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/Ls87QJYLRH8/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/Ls87QJYLRH8/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/Ls87QJYLRH8/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'Little Angel Bahasa Indonesia - Lagu Anak',
                        liveBroadcastContent: 'none',
                        publishTime: '2020-04-05T00:00:10Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: 'BR6TNJaFHIZ-alzMcbh9-wfjshM',
                    id: {
                        kind: 'youtube#video',
                        videoId: 'G1shg7WUKvM',
                    },
                    snippet: {
                        publishedAt: '2020-10-23T05:00:03Z',
                        channelId: 'UCChueHq0vtAIDSEgq4GKbSw',
                        title:
                            'Mapara A Jazz - John Vuli Gate [Feat. Ntosh Gazi &amp; Calano](Official Audio)',
                        description:
                            'Marpara A Jazz presents the official audio to John Vuli Gate featuring Ntosh Gazi and Calano. Available to Download / Stream: http://africori.to/johnvuligate.oyd ...',
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/G1shg7WUKvM/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/G1shg7WUKvM/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/G1shg7WUKvM/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'Africori',
                        liveBroadcastContent: 'none',
                        publishTime: '2020-10-23T05:00:03Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: 'Wpx104CKcuRJz10Dgvngw-dtflg',
                    id: {
                        kind: 'youtube#video',
                        videoId: 'mICXYSq9LQE',
                    },
                    snippet: {
                        publishedAt: '2020-12-05T15:00:22Z',
                        channelId: 'UCNzsYU0aWwjERj-9Y9HUEng',
                        title:
                            'Why Are You Sad Baby John? | Emotions Song + More Kid Songs &amp; Nursery Rhymes by Little Angel',
                        description:
                            'Baby John will need to learn how to manage his feelings and his family is there to help him along the way. Enjoy this latest kids song from Little Angel!',
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/mICXYSq9LQE/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/mICXYSq9LQE/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/mICXYSq9LQE/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'Little Angel: Nursery Rhymes & Kids Songs',
                        liveBroadcastContent: 'none',
                        publishTime: '2020-12-05T15:00:22Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: 'NlyBf4qtHYtgLlzh158i7Z5v01M',
                    id: {
                        kind: 'youtube#video',
                        videoId: '3kyUPp6xpPc',
                    },
                    snippet: {
                        publishedAt: '2012-05-22T02:42:53Z',
                        channelId: 'UCJ5v_MCY6GNUBTO8-D3XoAg',
                        title: 'John Cena vs. David Otunga: Raw, May 21, 2012',
                        description:
                            'David Otunga looks to do what his boss did a night earlier and beat John Cena. Check out Superstar reactions to this moment - http://youtu.be/L5RIufakGN8.',
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/3kyUPp6xpPc/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/3kyUPp6xpPc/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/3kyUPp6xpPc/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'WWE',
                        liveBroadcastContent: 'none',
                        publishTime: '2012-05-22T02:42:53Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: '7V7c6nrJU_wVH-_-oFhVAAOnvP4',
                    id: {
                        kind: 'youtube#video',
                        videoId: '2qERgf6UWIA',
                    },
                    snippet: {
                        publishedAt: '2017-12-01T12:56:00Z',
                        channelId: 'UCsPF3cApzCohxPp5oKdoWSQ',
                        title:
                            'Are You Sleeping Brother John - 3D Nursery Rhymes &amp; Songs For Children',
                        description:
                            'Are You Sleeping Brother John 3D Animation Nursery Rhymes & Kids Songs For Children.',
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/2qERgf6UWIA/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/2qERgf6UWIA/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/2qERgf6UWIA/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'CVS 3D Rhymes & Kids Songs',
                        liveBroadcastContent: 'none',
                        publishTime: '2017-12-01T12:56:00Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: 'DPh0t-FkZEaIQ0S231-TuaojYWY',
                    id: {
                        kind: 'youtube#video',
                        videoId: 'LyC855KdBKo',
                    },
                    snippet: {
                        publishedAt: '2020-11-09T07:30:02Z',
                        channelId: 'UC3XTzVzaHQEd30rQbuvCtTQ',
                        title: 'Election Results 2020: Last Week Tonight with John Oliver (HBO)',
                        description:
                            "John Oliver discusses the long week of US presidential election results, including Donald Trump's various attempts to make the election appear illegitimate, and ...",
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/LyC855KdBKo/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/LyC855KdBKo/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/LyC855KdBKo/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'LastWeekTonight',
                        liveBroadcastContent: 'none',
                        publishTime: '2020-11-09T07:30:02Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: 'j4HsVjRVp7B5Cmd7VcdwFXF3KkI',
                    id: {
                        kind: 'youtube#video',
                        videoId: 'MYO4jUFqAhA',
                    },
                    snippet: {
                        publishedAt: '2019-03-24T08:04:15Z',
                        channelId: 'UCiVsuTSKIdhxaWZFAP_1XSQ',
                        title:
                            'Are You Sleeping Brother John song |  동요와 아이 노래 | 어린이 교육',
                        description:
                            'Are You Sleeping Brother John song | 동요와 아이 노래 | 어린이 교육 www.youtube.com/channel/UCiVsuTSKIdhxaWZFAP_1XSQ?sub_confirmation=1 ...',
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/MYO4jUFqAhA/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/MYO4jUFqAhA/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/MYO4jUFqAhA/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'Alex and Nastya - kids videos',
                        liveBroadcastContent: 'none',
                        publishTime: '2019-03-24T08:04:15Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: 'vnKVt8bRi1MDY3rL0ahwJltbKZk',
                    id: {
                        kind: 'youtube#video',
                        videoId: 'ElIICRKlQXE',
                    },
                    snippet: {
                        publishedAt: '2018-09-04T12:08:15Z',
                        channelId: 'UCq8KR1lnewd5ZPx9_XKoubg',
                        title: 'Are you sleeping Brother John, Linda Pretend Play with Baby Dolls',
                        description:
                            'Linda Pretend Play with Dolls, Are you sleeping brother John! Hello, friends! My name is Linda. Today I play with my dolls with songs for children. Friends, thank ...',
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/ElIICRKlQXE/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/ElIICRKlQXE/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/ElIICRKlQXE/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'Johny FamilyShow',
                        liveBroadcastContent: 'none',
                        publishTime: '2018-09-04T12:08:15Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: 'uT4tGwlcGPcbihVfrtYcflUZK9s',
                    id: {
                        kind: 'youtube#video',
                        videoId: 'YkgkThdzX-8',
                    },
                    snippet: {
                        publishedAt: '2016-12-18T15:19:53Z',
                        channelId: 'UCYU4eunPInnHTNWfGvOgkbg',
                        title:
                            'IMAGINE. (Ultimate Mix, 2020) - John Lennon &amp; The Plastic Ono Band (with the Flux Fiddlers) HD',
                        description:
                            'JOHN LENNON. GIMME SOME TRUTH. THE ULTIMATE MIXES. The Very Best of John Lennon. 36 tracks completely remixed from the original multitracks in ...',
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/YkgkThdzX-8/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/YkgkThdzX-8/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/YkgkThdzX-8/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'johnlennon',
                        liveBroadcastContent: 'none',
                        publishTime: '2016-12-18T15:19:53Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: '8GW6t0BaS2R-TlGGZWLah6UTyFw',
                    id: {
                        kind: 'youtube#video',
                        videoId: '1abU7eDI4WM',
                    },
                    snippet: {
                        publishedAt: '2020-03-14T00:00:00Z',
                        channelId: 'UCdrHrQf0o0TO8YDntXJ4VIQ',
                        title:
                            'Selamat Tidur Ya Sayang | Lagu Tidur Anak | Little Angel Bahasa Indonesia',
                        description:
                            'Sudah saatnya untuk tidur dan istirahat, kata Ibu. Tetapi Baby John masih belum mau tidur, dia mau bermain sepanjang hari. Baby John masih asyik ...',
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/1abU7eDI4WM/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/1abU7eDI4WM/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/1abU7eDI4WM/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'Little Angel Bahasa Indonesia - Lagu Anak',
                        liveBroadcastContent: 'none',
                        publishTime: '2020-03-14T00:00:00Z',
                    },
                },
                {
                    kind: 'youtube#searchResult',
                    etag: 'Ehqdm01lbkEs1TDvXHlk9hsZs00',
                    id: {
                        kind: 'youtube#video',
                        videoId: 'ojD-7N8p2b4',
                    },
                    snippet: {
                        publishedAt: '2020-05-23T13:45:09Z',
                        channelId: 'UCDfk8ogO6QGeJAYCY0QDzKw',
                        title:
                            'BEST FRIEND JOHN is MISSING!! (Mystery Neighbor Took Him Searching for Gold Treasure)',
                        description:
                            'GET SHARE THE LOVE MERCH NOW!! ━▻ https://stephensharer.com/ FOLLOW ME ON INSTAGRAM ━▻ https://www.instagram.com/stephensharer/ In ...',
                        thumbnails: {
                            default: {
                                url: 'https://i.ytimg.com/vi/ojD-7N8p2b4/default.jpg',
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: 'https://i.ytimg.com/vi/ojD-7N8p2b4/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: 'https://i.ytimg.com/vi/ojD-7N8p2b4/hqdefault.jpg',
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: 'Stephen Sharer',
                        liveBroadcastContent: 'none',
                        publishTime: '2020-05-23T13:45:09Z',
                    },
                },
            ],
        };
    }
}
