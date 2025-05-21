(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4826],
  {
    88701: function (e, t, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/[sections]/[subsections]/[id]',
        function () {
          return i(9964);
        },
      ]);
    },
    23447: function (e, t, i) {
      'use strict';
      i.d(t, {
        l: function () {
          return a;
        },
      });
      var s = i(1010);
      let a = {
        LocalEventAd: async (e) => await (0, s.dX)('/ads/banner/local-event?category='.concat(e)),
        AdSlotAD: async (e, t) => {
          let i = '/ads/banner/ad-section?slot='.concat(e).concat(t ? '&category=' + t : '');
          return await (0, s.dX)(i);
        },
        SectionAD: async (e, t) => {
          let i = '/ads/banner/section?category='.concat(e).concat(t ? '&sectionId=' + t : '');
          return await (0, s.dX)(i);
        },
        localSectionAD: async (e) => await (0, s.dX)('/ads/banner/region?category='.concat(e)),
        MainBanner: async (e) => {
          let t = await fetch('https://rest.news1.kr/v6/ads/banner/main/pc/'.concat(e));
          return await t.json();
        },
        PopupBanner: async (e) => {
          let t = await fetch('https://rest.news1.kr/v6/ads/popup/'.concat(e));
          return await t.json();
        },
      };
    },
    95781: function (e, t, i) {
      'use strict';
      i.d(t, {
        hw: function () {
          return r;
        },
        j: function () {
          return h;
        },
        r8: function () {
          return l;
        },
        t5: function () {
          return n;
        },
      });
      var s = i(1010);
      let {
        News1PickApi: a,
        MainNewsApi: r,
        MainNewsApi2: l,
        OpinionApi: n,
        HotPhotoApi: o,
        PetCardApi: d,
        HotIssueApi: c,
        SectionListApi: h,
      } = {
        MainNewsApi: async (e) => {
          let t = '/main/news/'
            .concat(e.section, '?id=')
            .concat(e.id, '&listCount=')
            .concat(e.limit);
          return await (0, s.dX)(t);
        },
        MainNewsApi2: async (e) => {
          let t = '/main/news/'
            .concat(e.section, '?id=')
            .concat(e.id, '&listCount=')
            .concat(e.limit);
          return await (0, s.dX)(t);
        },
        HotIssueApi: async (e) => {
          let t = '/main/news/'
            .concat(e.section, '?id=')
            .concat(e.id, '&listCount=')
            .concat(e.limit);
          return await (0, s.dX)(t);
        },
        News1PickApi: async () => await (0, s.dX)('/news1-pick'),
        OpinionApi: async (e) => {
          let t = '/main/news/opinion?listCount='.concat(e.limit);
          return await (0, s.dX)(t);
        },
        HotPhotoApi: async (e) => {
          let t = '/main/news/hotphoto?listCount='.concat(e.limit);
          return await (0, s.dX)(t);
        },
        PetCardApi: async (e) => {
          let t = '/main/news/'
            .concat(e.section, '?id=')
            .concat(e.id, '&listCount=')
            .concat(e.limit);
          return await (0, s.dX)(t);
        },
        SectionListApi: async (e) => {
          let t = '/section/sectionAll?listCount='.concat(e.limit);
          return await (0, s.dX)(t);
        },
      };
    },
    28078: function (e, t, i) {
      'use strict';
      var s = i(85893),
        a = i(67294),
        r = i(84975),
        l = i(59639),
        n = i(220);
      let o = { title_class: 'n1-most-title-1', title_tag: 'h2', title_row: 'text-limit-2-row' };
      t.Z = a.memo((e) => {
        var t, i, d;
        let [c, h] = (0, a.useState)({
            id: e.id ? e.id : 'ALL',
            type: null !== (t = e.type) && void 0 !== t ? t : 10,
            limit: null !== (i = e.limit) && void 0 !== i ? i : 10,
          }),
          m = {},
          p = (e, t) => {
            let i = e ? e + ' 많이 본 뉴스' : '많이 본 뉴스';
            return (20 == t || 30 == t) && (i = 20 == t ? '많이 본 포토' : '많이 본 영상'), i;
          },
          [u, w] = (0, a.useState)(p(null !== (d = e.name) && void 0 !== d ? d : '', e.type)),
          g = e.listType ? e.listType : 'NewsItemF';
        20 == e.type || 30 == e.type
          ? ((g = 20 == e.type ? 'NewsItemV2' : 'NewsItemV3'), (m = 'row m-0'))
          : (m = 'w-lg-300'),
          'NewsItemF' === g && (o.title_class = 'n1-header-title-related-3');
        let x = (0, n.uW)(c);
        return (
          (0, a.useEffect)(() => {
            var t;
            h((t) => ({ ...t, id: e.id })),
              w(p(null !== (t = e.name) && void 0 !== t ? t : '', e.type));
          }, [e.id, e.type, e.name]),
          (0, s.jsx)(s.Fragment, {
            children: (0, s.jsxs)('div', {
              className: 2 != e.slidesToShow ? ''.concat(m) : '',
              children: [
                'NewsSlider' !== g && (0, s.jsx)(l.Sk, { title: u }),
                (0, s.jsx)(r.Z, {
                  posts: x ? x.data : [],
                  title: u,
                  width: 80,
                  height: 80,
                  listType: g,
                  listCount: e.listCount,
                  slidesToScroll: e.slidesToScroll,
                  slidesToShow: e.slidesToShow,
                  ...o,
                }),
              ],
            }),
          })
        );
      });
    },
    65211: function (e, t, i) {
      'use strict';
      i.d(t, {
        Du: function () {
          return d;
        },
        c7: function () {
          return o;
        },
        et: function () {
          return h;
        },
        gl: function () {
          return c;
        },
      });
      var s = i(85893),
        a = i(37386),
        r = i(67294),
        l = i(23447),
        n = i(76116);
      let o = (e) => {
          let { category: t, itemCount: i } = e,
            n = {
              width: 300,
              height: 65,
              idx: null != t ? t : 0,
              currentTimeMill: Date.now(),
              itemsPerPage: null != i ? i : 2,
            },
            [o, d] = (0, r.useState)([]);
          return (
            (0, r.useEffect)(() => {
              l.l.LocalEventAd(n.idx).then((e) => {
                200 == e.status && d(e.data);
              });
            }, [t, i]),
            (0, s.jsx)(a.AH, { settings: n, data: o })
          );
        },
        d = (e) => {
          let { category: t, itemCount: i } = e,
            a = {
              width: 300,
              height: 65,
              idx: null != t ? t : 0,
              currentTimeMill: Date.now(),
              itemsPerPage: null != i ? i : 2,
            },
            [o, d] = (0, r.useState)([]);
          return ((0, r.useEffect)(() => {
            l.l.localSectionAD(a.idx).then((e) => {
              200 == e.status && d(e.data);
            });
          }, [a.idx]),
          !o || (o && 0 == o.length))
            ? (0, s.jsx)(s.Fragment, {})
            : (0, s.jsxs)('div', {
                className: '',
                style: { display: 'flex', flexDirection: 'column', padding: '5px' },
                children: [
                  ' ',
                  (0, s.jsx)(
                    (e) => {
                      let { data: t } = e;
                      return t.map((e, t) =>
                        (0, s.jsx)(
                          'div',
                          {
                            style: {
                              width: '100%',
                              position: 'relative',
                              margin: '10px auto 0',
                              maxWidth: 300,
                              flex: '1',
                            },
                            children: (0, s.jsx)(n.il, { ...e }),
                          },
                          'section-list-banner-item-'.concat(t)
                        )
                      );
                    },
                    { data: o }
                  ),
                ],
              });
        },
        c = r.memo((e) => {
          let { adslotId: t, sectionID: i } = e,
            [a, o] = (0, r.useState)({});
          return (
            (0, r.useEffect)(() => {
              l.l.SectionAD(t, i).then((e) => {
                200 == e.status && o(e.data);
              });
            }, [t, i]),
            (0, s.jsx)(s.Fragment, {
              children:
                a &&
                (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)('div', {
                      className: 'container',
                      children: (0, s.jsx)('div', { className: 'row widget-border-top-3' }),
                    }),
                    (0, s.jsx)('div', {
                      className: 'd-block d-md-none d-lg-block ',
                      children: (0, s.jsx)(
                        (e) => {
                          let { data: t } = e;
                          return Object.keys(t).map((e) => {
                            let i = t[e],
                              a = Math.floor(Math.random() * i.length),
                              r = i[a];
                            if (r)
                              return (0, s.jsx)(
                                'div',
                                {
                                  className: 'mt-10  ',
                                  children: (0, s.jsx)('div', {
                                    className: 'm-auto',
                                    children: (0, s.jsx)(n.lU, { ...r }),
                                  }),
                                },
                                'section-list-banner-item-'.concat(r.acidx, '-').concat(a)
                              );
                          });
                        },
                        { data: a }
                      ),
                    }),
                  ],
                }),
            })
          );
        }),
        h = r.memo((e) => {
          let { adslotId: t, sectionID: i } = e,
            [n, o] = (0, r.useState)([]);
          (0, r.useEffect)(() => {
            l.l.AdSlotAD(t, i).then((e) => {
              200 == e.status && o(e.data);
            });
          }, [t, i]);
          let d = {
            width: '100%',
            height: 50,
            idx: t,
            currentTimeMill: Date.now(),
            itemsPerPage: 1,
          };
          return (0, s.jsx)('div', { children: (0, s.jsx)(a.AH, { settings: d, data: n }) });
        });
      (c.displayName = 'SlotBannerComponent'), (h.displayName = 'ADSlotBannerComponent');
    },
    28973: function (e, t, i) {
      'use strict';
      var s = i(85893),
        a = i(28078),
        r = i(67294);
      t.Z = r.memo((e, t) => {
        let { section_id: i, section_kor: l, children: n, mostnews_type: o, mostnews_max: d } = e,
          { ...c } = t,
          [h] = (0, r.useState)(c.items),
          [m, p] = (0, r.useState)(!0);
        return (
          (0, r.useEffect)(() => {
            null == h ||
              h.map((e, t) => {
                'MostViewNews' === e && p(!0);
              });
          }, [h]),
          (0, s.jsxs)(s.Fragment, {
            children: [
              m &&
                (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)('div', {
                      className: 'd-md-none d-none d-lg-block mt-20 '.concat(
                        'NewsSlider' != o ? '' : 'most-h480',
                        ' '
                      ),
                      children: (0, s.jsx)(a.Z, {
                        id: i,
                        listType: o || 'NewsSlider',
                        name: l,
                        type: 10,
                        limit: d || 10,
                      }),
                    }),
                    (0, s.jsxs)('div', {
                      className: 'd-md-block d-none d-lg-none most-h520',
                      children: [
                        (0, s.jsx)('div', {
                          className: 'container',
                          children: (0, s.jsx)('div', { className: 'row widget-border-top-3' }),
                        }),
                        (0, s.jsx)(a.Z, {
                          id: i,
                          listType: 'NewsSlider',
                          name: l,
                          slidesToShow: 2,
                          slidesToScroll: 2,
                          type: 10,
                          limit: 10,
                        }),
                      ],
                    }),
                    (0, s.jsxs)('div', {
                      className: 'd-block d-md-none d-lg-none mt-20 most-h520',
                      children: [
                        (0, s.jsx)('div', {
                          className: 'container',
                          children: (0, s.jsx)('div', { className: 'row widget-border-top-3' }),
                        }),
                        (0, s.jsx)(a.Z, {
                          id: i,
                          listType: 'NewsSlider',
                          name: l,
                          type: 10,
                          limit: 10,
                        }),
                      ],
                    }),
                  ],
                }),
              n,
            ],
          })
        );
      });
    },
    29199: function (e, t, i) {
      'use strict';
      var s = i(85893),
        a = i(83435),
        r = i(76720),
        l = i(41664),
        n = i.n(l),
        o = i(11163),
        d = i(28078);
      i(67294),
        (t.Z = () => {
          let e = (0, o.useRouter)();
          return (0, s.jsx)(a.Z, {
            children: (0, s.jsx)('main', {
              children: (0, s.jsx)('div', {
                className: 'container',
                children: (0, s.jsxs)('div', {
                  className: 'row',
                  children: [
                    (0, s.jsxs)('div', {
                      className: 'col-12 align-items-center my-5 pb-50 border-bottom-1 border-dark',
                      children: [
                        (0, s.jsxs)('p', {
                          className: 'n1-header-title-5 text-center mb-50',
                          children: [
                            '원하시는 페이지를 찾을 수 없습니다.',
                            (0, s.jsx)('br', {}),
                            '서비스 이용에 불편을 드려 대단히 죄송합니다.',
                            (0, s.jsx)('br', {}),
                          ],
                        }),
                        (0, s.jsxs)('div', {
                          className: 'd-flex justify-content-center',
                          children: [
                            (0, s.jsx)(n(), {
                              prefetch: !1,
                              href: '/',
                              children: (0, s.jsx)(r.Z, {
                                className: 'mx-3 ',
                                children: '메인 페이지로 이동',
                              }),
                            }),
                            (0, s.jsx)(r.Z, {
                              onClick: () => e.back(),
                              className: 'mx-3 ',
                              children: '이전 페이지로 이동',
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsx)('div', {
                      className: 'd-lg-block d-md-block d-none',
                      children: (0, s.jsx)('div', {
                        className: 'row',
                        children: (0, s.jsx)('div', {
                          className: 'col-md-12 col-lg-8 m-auto',
                          children: (0, s.jsx)(d.Z, {
                            id: 'ALL',
                            type: 10,
                            limit: 10,
                            listCount: 5,
                            listType: 'NewsSlider',
                            slidesToScroll: 2,
                            slidesToShow: 2,
                          }),
                        }),
                      }),
                    }),
                    (0, s.jsx)('div', {
                      className: 'd-lg-none d-md-none d-block',
                      children: (0, s.jsx)('div', {
                        className: 'row',
                        children: (0, s.jsx)('div', {
                          className: 'col-12',
                          children: (0, s.jsx)(d.Z, {
                            id: 'ALL',
                            type: 10,
                            limit: 10,
                            listCount: 5,
                            listType: 'NewsSlider',
                            slidesToScroll: 1,
                            slidesToShow: 1,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        });
    },
    40047: function (e, t, i) {
      'use strict';
      var s = i(85893);
      t.Z = (e) => {
        let { title_tag: t, title_class: i, title_row: a, children: r } = e,
          l = ''.concat(i, ' ').concat(a || '');
        switch (t) {
          case 'h2':
            return (0, s.jsx)('h2', { className: l, children: r });
          case 'h3':
            return (0, s.jsx)('h3', { className: l, children: r });
          case 'h4':
            return (0, s.jsx)('h4', { className: l, children: r });
          case 'h5':
            return (0, s.jsx)('h5', { className: l, children: r });
          case 'h6':
            return (0, s.jsx)('h6', { className: l, children: r });
          case 'div':
            return (0, s.jsx)('div', { className: l, children: r });
        }
      };
    },
    82989: function (e, t, i) {
      'use strict';
      i.d(t, {
        dX: function () {
          return c;
        },
        Bw: function () {
          return h;
        },
        gx: function () {
          return d;
        },
      });
      var s = i(85893),
        a = i(9008),
        r = i.n(a);
      let l =
          'https://image.news1.kr/system/resource/news1_m/1/images/common/logo_news1_1200x630.jpg',
        n = {
          COMPANY_NEWS1: {
            '@type': 'NewsMediaOrganization',
            '@id': 'https://www.news1.kr/',
            name: '뉴스1',
            foundingDate: '2011-05-26',
            url: 'https://www.news1.kr/',
            logo: {
              '@type': 'ImageObject',
              url: l,
              creditText: '뉴스1',
              creator: { '@type': 'Organization', name: '뉴스1' },
              copyrightNotice: 'news1',
              license: 'https://www.news1.kr/customer/agreement',
              acquireLicensePage: 'https://www.news1.kr/customer/contents_photo',
            },
            sameAs: [
              'https://m.post.naver.com/my.nhn?memberNo=11567548',
              'https://www.youtube.com/user/news1korea',
              'https://www.facebook.com/news1kr/',
              'https://twitter.com/news1kr',
              'https://play.google.com/store/apps/details?id=kr.news1.newsapp&hl=ko',
              'https://itunes.apple.com/kr/app/id756096168',
              'https://ko.wikipedia.org/wiki/%EB%89%B4%EC%8A%A41',
            ],
          },
          getVideoObject: (e) => {
            var t;
            return JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'VideoObject',
              '@id': 'https://www.news1.kr/videos/'.concat(e.id),
              url: 'https://www.news1.kr/videos/'.concat(e.id),
              name: e.title,
              uploadDate: e.published_time,
              keywords: n.getKeywordString(e.keywords_array),
              description: null !== (t = e.summary) && void 0 !== t ? t : e.content,
              thumbnailUrl: e.image,
              duration: n.toISO8601DateTime(e.duration),
              genre: n.getGenre(e.category_array),
              embedUrl: 'https://www.news1.kr/videos/embed/'.concat(e.id),
              sameAs: [
                'https://tv.news1.kr/video/'.concat(e.id),
                'https://m-tv.news1.kr/video/'.concat(e.id),
              ],
              creator: { '@type': 'Organization', name: '뉴스1' },
              copyrightHolder: n.COMPANY_NEWS1,
            });
          },
          getArticleObject(e) {
            var t, i, s, a, r;
            let o = [];
            if (
              void 0 !== e.contentArrange &&
              Array.isArray(e.contentArrange) &&
              e.contentArrange.length > 0
            ) {
              let t = 1;
              e.contentArrange.map((e) => {
                'image' === e.type &&
                  o.push({
                    '@context': 'https://schema.org',
                    '@type': 'ImageObject',
                    url: e.src,
                    position: t++,
                    width: e.width,
                    height: e.height,
                    copyrightNotice: 'news1',
                    creator: { '@type': 'Organization', name: '뉴스1' },
                    license: 'https://www.news1.kr/customer/agreement',
                    acquireLicensePage: 'https://www.news1.kr/customer/contents_photo',
                  });
              });
            }
            Array.isArray(e.contentArrange) &&
              o.length <= 0 &&
              o.push({
                '@context': 'https://schema.org',
                '@type': 'ImageObject',
                url: l,
                position: 1,
                width: 1200,
                height: 630,
                copyrightNotice: '뉴스1',
                creator: { '@type': 'Organization', name: '뉴스1' },
                license: 'https://www.news1.kr/customer/agreement',
                acquireLicensePage: 'https://www.news1.kr/customer/contents_photo',
              });
            let d =
              null !== (i = e.description) && void 0 !== i
                ? i
                : null === (t = e.summary) || void 0 === t
                ? void 0
                : t.replace(/(<([^>]+)>)/gi, '-');
            return JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'NewsArticle',
              inLanguage: 'ko-KR',
              genre: n.getGenre(e.category_array),
              url: 'https://www.news1.kr/'.concat(e.url),
              name: e.title,
              headLine: e.title,
              keywords: n.getArticleKeywordString(e.keywords_array),
              image: o,
              thumbnailUrl: e.image,
              datePublished: null !== (s = e.published_time) && void 0 !== s ? s : '',
              dateModified: null !== (a = e.modified_time) && void 0 !== a ? a : '',
              copyrightYear: ''.concat(
                new Date(null !== (r = e.published_time) && void 0 !== r ? r : '').getFullYear()
              ),
              description: d,
              author: n.getAuthorObject(e.reporter_box),
              mainEntityOfPage: 'https://www.news1.kr/'.concat(e.url),
              isPartOf: { '@type': 'CreativeWork', name: '뉴스1' },
              copyrightHolder: n.COMPANY_NEWS1,
            });
          },
          getPhotoObject(e) {
            var t, i, s, a, r;
            let l =
              null !==
                (s =
                  null === (t = e.summary) || void 0 === t
                    ? void 0
                    : t.replace(/(<([^>]+)>)/gi, '')) && void 0 !== s
                ? s
                : null === (i = e.title) || void 0 === i
                ? void 0
                : i.replace(/(<([^>]+)>)/gi, '');
            return JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'NewsArticle',
                '@id': 'https://www.news1.kr/photos/'.concat(e.id),
                inLanguage: 'ko-KR',
                genre: e.upper_category_nm,
                url: 'https://www.news1.kr/photos/'.concat(e.id),
                name: e.title,
                headLine: e.title,
                keywords: n.getArticleKeywordString(e.keywords_array),
                image: e.image,
                thumbnailUrl: e.image,
                datePublished: null !== (a = e.published_time) && void 0 !== a ? a : '',
                dateModified: null !== (r = e.modified_time) && void 0 !== r ? r : '',
                description: l,
                creditText: n.getPhotoCredit(e.reporter_box),
                author: n.getAuthorObject(e.reporter_box),
                mainEntityOfPage: 'https://www.news1.kr/'.concat(e.url),
                isPartOf: { '@type': 'CreativeWork', name: '뉴스1' },
                creator: { '@type': 'Organization', name: '뉴스1' },
                copyrightNotice: 'news1',
                license: 'https://www.news1.kr/customer/agreement',
                acquireLicensePage: 'https://www.news1.kr/customer/contents_photo',
                copyrightHolder: n.COMPANY_NEWS1,
              },
            ]);
          },
          getAuthorObject: (e) =>
            e
              ? e.map((e) => ({
                  '@type': 'Person',
                  name: e.name,
                  url: 'https://www.news1.kr' + e.url,
                }))
              : [],
          getImageObject: (e) =>
            Array.isArray(e)
              ? e.map((e) => ({
                  '@context': 'https://schema.org',
                  '@type': 'ImageObject',
                  url: e.url,
                  height: e.height,
                  width: e.width,
                  contentUrl: e.url,
                  caption: e.title,
                  creditText: n.getPhotoCredit(e.reporter_box),
                  creator: { '@type': 'Organization', name: '뉴스1' },
                  copyrightNotice: 'news1',
                  license: 'https://www.news1.kr/customer/agreement',
                  acquireLicensePage: 'https://www.news1.kr/customer/contents_photo',
                }))
              : {
                  '@context': 'https://schema.org',
                  '@type': 'ImageObject',
                  url: e.url,
                  height: e.height,
                  width: e.width,
                  contentUrl: e.url,
                  caption: e.title,
                  creditText: n.getPhotoCredit(e.reporter_box),
                  creator: { '@type': 'Organization', name: '뉴스1' },
                  copyrightNotice: 'news1',
                  license: 'https://www.news1.kr/customer/agreement',
                  acquireLicensePage: 'https://www.news1.kr/customer/contents_photo',
                },
          toISO8601PUBDate: (e) => new Date(e).toISOString(),
          toISO8601DateTime: (e) => {
            if (void 0 === e) return '0';
            let t = e.split(':');
            switch (t.length) {
              case 1:
                return 'PT'.concat(parseInt(t[0], 10), 'S');
              case 2:
                return 'PT'.concat(parseInt(t[0], 10), 'M').concat(parseInt(t[1], 10), 'S');
              case 3:
                return 'PT'
                  .concat(parseInt(t[0], 10), 'H')
                  .concat(parseInt(t[1], 10), 'M')
                  .concat(parseInt(t[2], 10), 'S');
              default:
                return '0';
            }
          },
          getKeywordString: (e) => (Array.isArray(e) ? e.join(',') : null != e ? e : ''),
          getArticleKeywordString: (e) => {
            if (e && e.data) {
              let { data: t } = e;
              return t.map((e) => e.keyword).join(',');
            }
            return null != e ? e : '';
          },
          getGenre: (e) => (Array.isArray(e) ? e[0].upper_category_eng : 'news'),
          getPhotoCredit: (e) => (e ? e.map((e) => e.name + '/' + e.dept).join(',') : '-'),
        },
        o = (e) => {
          let { jsonData: t } = e;
          return (0, s.jsx)(r(), {
            children: (0, s.jsx)('script', {
              type: 'application/ld+json',
              dangerouslySetInnerHTML: { __html: t },
            }),
          });
        },
        d = (e) => {
          let { video: t } = e;
          return (0, s.jsx)(o, { jsonData: n.getVideoObject(t) });
        },
        c = (e) => {
          let { article: t } = e;
          return (0, s.jsx)(o, { jsonData: n.getArticleObject(t) });
        },
        h = (e) => {
          let { photo: t } = e;
          return (0, s.jsx)(o, { jsonData: n.getPhotoObject(t) });
        };
    },
    9964: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, {
          __N_SSG: function () {
            return q;
          },
          default: function () {
            return K;
          },
        });
      var s = i(85893),
        a = i(67294),
        r = i(9008),
        l = i.n(r),
        n = i(83435),
        o = i(28973),
        d = i(47311),
        c = i(29199),
        h = i(625),
        m = i(45697),
        p = i.n(m),
        u = ['color', 'size', 'title', 'className'];
      function w() {
        return (w = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var s in i) ({}).hasOwnProperty.call(i, s) && (e[s] = i[s]);
              }
              return e;
            }).apply(null, arguments);
      }
      var g = (0, a.forwardRef)(function (e, t) {
        var i = e.color,
          s = e.size,
          r = void 0 === s ? '1em' : s,
          l = e.title,
          n = void 0 === l ? null : l,
          o = e.className,
          d = (function (e, t) {
            if (null == e) return {};
            var i,
              s,
              a = (function (e, t) {
                if (null == e) return {};
                var i = {};
                for (var s in e)
                  if ({}.hasOwnProperty.call(e, s)) {
                    if (-1 !== t.indexOf(s)) continue;
                    i[s] = e[s];
                  }
                return i;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              for (s = 0; s < r.length; s++)
                (i = r[s]),
                  -1 === t.indexOf(i) && {}.propertyIsEnumerable.call(e, i) && (a[i] = e[i]);
            }
            return a;
          })(e, u);
        return a.createElement(
          'svg',
          w(
            {
              ref: t,
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 16 16',
              width: r,
              height: r,
              fill: void 0 === i ? 'currentColor' : i,
              className: ['bi', 'bi-x-square', void 0 === o ? '' : o].filter(Boolean).join(' '),
            },
            d
          ),
          n ? a.createElement('title', null, n) : null,
          a.createElement('path', {
            d: 'M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z',
          }),
          a.createElement('path', {
            d: 'M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708',
          })
        );
      });
      g.propTypes = {
        color: p().string,
        size: p().oneOfType([p().string, p().number]),
        title: p().string,
        className: p().string,
      };
      var x = i(55756),
        v = i(29603),
        j = i(98201),
        b = i(82989),
        y = i(91672),
        f = i(48188);
      let N = (e) => {
        window.dable('setService', e), window.dable('sendLogOnce');
      };
      var _ = i(41664),
        A = i.n(_),
        k = i(25675),
        S = i.n(k),
        I = a.memo((e) =>
          (0, s.jsx)('div', {
            className: ' col-md-6 col-6 col-lg-6 mt-2 position-relative ',
            children: (0, s.jsxs)(A(), {
              prefetch: !1,
              href: ''.concat(e.posts.url),
              children: [
                (0, s.jsx)('div', {
                  className: '  position-relative ',
                  children: (0, s.jsx)(S(), {
                    src: ''.concat(e.posts.image),
                    width: e.settings.width,
                    height: e.settings.height,
                    alt: e.posts.title,
                    className: 'border-top-radius-10 img-fluid  '.concat(e.settings.useImageClass),
                    sizes: '(max-width: 768px) 50vw,(min-width: 1024px) 680px,100vw',
                    placeholder: 'blur',
                    blurDataURL:
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNcvXqZMgAGJgIhrjiC6AAAAABJRU5ErkJggg==',
                    style: { objectFit: 'cover' },
                  }),
                }),
                (0, s.jsx)('div', {
                  className: 'post-content  ',
                  children: (0, s.jsx)('div', {
                    className: 'row',
                    children: (0, s.jsx)('div', {
                      children: (0, s.jsx)('h6', {
                        className: ''
                          .concat(e.settings.title_class, ' ')
                          .concat(e.settings.title_row, ' mt-2'),
                        children: e.posts.title,
                      }),
                    }),
                  }),
                }),
              ],
            }),
          })
        ),
        Z = i(31374),
        C = i(40047),
        O = i(95781),
        E = a.memo((e) => {
          let [t, i] = (0, a.useState)(),
            r = async () => {
              let t = await (0, O.r8)({ section: 'entertain', id: 26, limit: e.listCount });
              t && i(t.data);
            };
          (0, a.useEffect)(() => {
            r();
          }, [e.listCount]);
          let l = {
            width: 400,
            height: 300,
            title_tag: 'h2',
            title_class: 'n1-header-title-card-extra-1',
            title_row: 'text-limit-2-row',
            summary_row: 'text-limit-2-row',
            useImageClass: 'thumb-lg-h100 thumb-md-h200 thumb-sm-h110',
          };
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)('div', { className: 'widget-border-top-2 mt-20 ' }),
              (0, s.jsxs)(C.Z, {
                title_tag: 'div',
                title_class: 'n1-aside-header-title d-flex align-items-center',
                title_row: '',
                children: [
                  (0, s.jsx)(A(), { prefetch: !1, href: '/entertain', children: '연예' }),
                  (0, s.jsx)(Z.Z, {}),
                ],
              }),
              (0, s.jsx)('section', {
                className: 'container p-0',
                children: (0, s.jsx)('div', {
                  className: 'row gx-3',
                  children:
                    null == t
                      ? void 0
                      : t.data.map((e, t) => (0, s.jsx)(I, { posts: e, settings: l }, t)),
                }),
              }),
            ],
          });
        }),
        P = a.memo((e) => {
          let [t, i] = (0, a.useState)(),
            r = async () => {
              let t = await (0, O.r8)({ section: 'sports', id: 27, limit: e.listCount });
              t && i(t.data);
            };
          (0, a.useEffect)(() => {
            r();
          }, [e.listCount]);
          let l = {
            width: 400,
            height: 300,
            title_tag: 'h2',
            title_class: 'n1-header-title-card-extra-1',
            title_row: 'text-limit-2-row',
            summary_row: 'text-limit-2-row',
            useImageClass: 'thumb-lg-h100 thumb-md-h200 thumb-sm-h110',
          };
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)('div', { className: 'widget-border-top-2 mt-20 ' }),
              (0, s.jsxs)(C.Z, {
                title_tag: 'div',
                title_class: 'n1-aside-header-title d-flex align-items-center',
                title_row: '',
                children: [
                  (0, s.jsx)(A(), { prefetch: !1, href: '/sports', children: '스포츠' }),
                  (0, s.jsx)(Z.Z, {}),
                ],
              }),
              (0, s.jsx)('section', {
                className: 'container p-0',
                children: (0, s.jsx)('div', {
                  className: 'row gx-3',
                  children:
                    null == t
                      ? void 0
                      : t.data.map((e, t) => (0, s.jsx)(I, { posts: e, settings: l }, t)),
                }),
              }),
            ],
          });
        }),
        T = i(78313),
        D = a.memo((e) => {
          var t, i, a, r, l, n, o, d, c, h, m, p, u, w, g, x, v, j, b, y, f, N, _, k, I, Z, C, O;
          if (
            !(null == e ? void 0 : e.posts) ||
            !(null === (i = e.posts) || void 0 === i
              ? void 0
              : null === (t = i.profile) || void 0 === t
              ? void 0
              : t[0])
          )
            return (0, s.jsx)(s.Fragment, {});
          let E =
            null === (l = e.posts) || void 0 === l
              ? void 0
              : null === (r = l.profile) || void 0 === r
              ? void 0
              : null === (a = r[0]) || void 0 === a
              ? void 0
              : a.image;
          ((null === (n = e.posts.profile) || void 0 === n ? void 0 : n[0].id) === 25 ||
            (null === (o = e.posts.profile) || void 0 === o ? void 0 : o[0].id) === 53 ||
            (null === (d = e.posts.profile) || void 0 === d ? void 0 : d[0].id) === 597) &&
            (E = e.posts.image
              ? e.posts.image
              : null === (C = e.posts) || void 0 === C
              ? void 0
              : null === (Z = C.profile) || void 0 === Z
              ? void 0
              : null === (I = Z[0]) || void 0 === I
              ? void 0
              : I.image);
          let P = (0, T.E)(E);
          return (0, s.jsx)('div', {
            className: 'col-lg-12 col-md-6 col-6',
            children: (0, s.jsx)('div', {
              className: 'border  rounded-3  position-relative mx-md-0 my-md-1 py-3 px-2 my-1 ',
              children: (0, s.jsxs)('div', {
                className: ' d-flex text-center text-md-start flex-column flex-md-row ',
                children: [
                  (0, s.jsx)('div', {
                    className: 'col-6 col-md-3 col-lg-3 col-lg-3-none m-auto',
                    children:
                      (null === (h = e.posts.profile) || void 0 === h
                        ? void 0
                        : null === (c = h[0]) || void 0 === c
                        ? void 0
                        : c.image) &&
                      (0, s.jsx)(A(), {
                        prefetch: !1,
                        href: '/opinion/'.concat(
                          null === (u = e.posts) || void 0 === u
                            ? void 0
                            : null === (p = u.profile) || void 0 === p
                            ? void 0
                            : null === (m = p[0]) || void 0 === m
                            ? void 0
                            : m.link
                        ),
                        children: (0, s.jsx)(S(), {
                          src: ''.concat(P),
                          width: 70,
                          height: 70,
                          unoptimized: !0,
                          alt:
                            null !==
                              (O =
                                null === (x = e.posts) || void 0 === x
                                  ? void 0
                                  : null === (g = x.profile) || void 0 === g
                                  ? void 0
                                  : null === (w = g[0]) || void 0 === w
                                  ? void 0
                                  : w.title) && void 0 !== O
                              ? O
                              : '',
                          className: 'rounded-pill avatar',
                          sizes: '(max-width: 768px) 50vw,(min-width: 1024px) 680px,100vw',
                          placeholder: 'blur',
                          blurDataURL:
                            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNcvXqZMgAGJgIhrjiC6AAAAABJRU5ErkJggg==',
                          style: { objectFit: 'cover' },
                        }),
                      }),
                  }),
                  (0, s.jsxs)('div', {
                    className: 'flex-fill ps-md-2',
                    children: [
                      (0, s.jsx)('h6', {
                        className: 'opinions-profile-title text-limit-1-row ',
                        children: (0, s.jsx)(A(), {
                          prefetch: !1,
                          href: '/opinion/'.concat(
                            null === (b = e.posts) || void 0 === b
                              ? void 0
                              : null === (j = b.profile) || void 0 === j
                              ? void 0
                              : null === (v = j[0]) || void 0 === v
                              ? void 0
                              : v.link
                          ),
                          children:
                            null === (N = e.posts) || void 0 === N
                              ? void 0
                              : null === (f = N.profile) || void 0 === f
                              ? void 0
                              : null === (y = f[0]) || void 0 === y
                              ? void 0
                              : y.title,
                        }),
                      }),
                      (0, s.jsx)('div', {
                        className: ' col-2h-box',
                        children: (0, s.jsx)('h6', {
                          className: 'opinions-article-title text-limit-2-row text-start',
                          children: (0, s.jsx)(A(), {
                            prefetch: !1,
                            href: ''.concat(
                              null === (_ = e.posts) || void 0 === _ ? void 0 : _.url
                            ),
                            children: null === (k = e.posts) || void 0 === k ? void 0 : k.title,
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        }),
        L = a.memo((e) => {
          var t;
          let [i, r] = (0, a.useState)(),
            l = async () => {
              let t = await (0, O.t5)({ limit: e.listCount });
              t && r(t.data);
            };
          (0, a.useEffect)(() => {
            l();
          }, [e.listCount]);
          let n = {
            width: 300,
            height: 160,
            title_tag: 'div',
            title_class: 'opinions-article-title',
            title_row: 'text-limit-2-row',
          };
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)('div', { className: 'widget-border-top-2 mt-20 ' }),
              (0, s.jsxs)(C.Z, {
                title_tag: 'div',
                title_class: 'n1-aside-header-title d-flex align-items-center',
                title_row: '',
                children: [
                  (0, s.jsx)(A(), { prefetch: !1, href: '/opinion', children: '오피니언' }),
                  (0, s.jsx)(Z.Z, {}),
                ],
              }),
              (0, s.jsx)('div', {
                className: 'row  p-0',
                children:
                  null == i
                    ? void 0
                    : null === (t = i.data) || void 0 === t
                    ? void 0
                    : t.map((e, t) =>
                        (0, s.jsx)(
                          D,
                          { posts: e, settings: n },
                          'opinion-'.concat(t, '-').concat(e.id)
                        )
                      ),
              }),
            ],
          });
        }),
        M = i(961),
        F = a.memo((e) => {
          let { boxType: t, seriesUri: i, itemCount: r } = e,
            [l, n] = (0, a.useState)(),
            [o, d] = (0, a.useState)([]);
          if (
            ((0, a.useEffect)(() => {
              (0, M.my)({ link: i, limit: r })
                .then((e) => {
                  n(e.data.title), d(e.data.data);
                })
                .catch((e) => console.log(e));
            }, [r, i]),
            'typeA' === t)
          )
            return (0, s.jsx)('div', {
              className: 'row-bottom-border ',
              children: (0, s.jsxs)('div', {
                className: 'm-auto',
                children: [
                  (0, s.jsx)('div', { className: 'widget-border-top-2 mt-20 ' }),
                  l &&
                    (0, s.jsxs)(C.Z, {
                      title_tag: 'div',
                      title_class: 'n1-aside-header-title d-flex align-items-center',
                      title_row: '',
                      children: [
                        (0, s.jsx)(A(), {
                          prefetch: !1,
                          href: '/series/special/' + i,
                          children: l,
                        }),
                        (0, s.jsx)(Z.Z, {}),
                      ],
                    }),
                  null == o
                    ? void 0
                    : o.map((e, t) =>
                        (0, s.jsx)(
                          'div',
                          {
                            className: 'row-bottom-border',
                            children: (0, s.jsxs)('div', {
                              className: 'row',
                              children: [
                                (0, s.jsx)('div', {
                                  className: 'col-4',
                                  children: (0, s.jsx)(A(), {
                                    prefetch: !1,
                                    href: e.url,
                                    children: (0, s.jsx)(S(), {
                                      className: 'flex-fill w-100 rounded-3',
                                      src: ''.concat(e.image),
                                      width: 80,
                                      height: 80,
                                      unoptimized: !0,
                                      alt: e.title,
                                      placeholder: 'blur',
                                      style: { objectFit: 'cover' },
                                      sizes:
                                        '(max-width: 768px) 50vw,(min-width: 1024px) 680px,100vw',
                                      quality: 80,
                                      blurDataURL:
                                        'data:image/jpeg;base64,aHR0cHM6Ly9pbWFnZS5uZXdzMS5rci9zeXN0ZW0vcmVzb3VyY2UvbmV3czFfbS8xL2ltYWdlcy9ub2ltYWdlL25vX2ltYWdlXzU1MHgzMjguanBn',
                                    }),
                                  }),
                                }),
                                (0, s.jsx)('div', {
                                  className: 'col ',
                                  children: (0, s.jsx)(A(), {
                                    prefetch: !1,
                                    href: e.url,
                                    children: (0, s.jsx)('h6', {
                                      className: 'n1-header-title-related-3  text-limit-2-row',
                                      children: e.title,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          },
                          t
                        )
                      ),
                ],
              }),
            });
        }),
        U = i(81614),
        z = i(37386),
        B = i(87672),
        R = i(7594),
        X = a.memo((e) =>
          (0, s.jsx)(s.Fragment, {
            children: (0, s.jsx)('div', {
              className: 'row-bottom-border ',
              children: (0, s.jsxs)('div', {
                className: 'row',
                children: [
                  (0, s.jsx)('div', {
                    className: 'col-3 col-md-3 col-lg-4',
                    children: (0, s.jsx)(A(), {
                      prefetch: !1,
                      href: ''.concat(e.posts.url),
                      children: (0, s.jsx)(S(), {
                        src: ''.concat(e.posts.image),
                        width: e.settings.width,
                        height: e.settings.height,
                        alt: e.posts.title,
                        unoptimized: !0,
                        className: 'rounded-3 rounded-m-3 img-fluid '.concat(
                          e.settings.useImageClass
                        ),
                        sizes: '(max-width: 768px) 50vw,(min-width: 1024px) 680px,100vw',
                        placeholder: 'blur',
                        blurDataURL:
                          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNcvXqZMgAGJgIhrjiC6AAAAABJRU5ErkJggg==',
                        style: { objectFit: 'cover' },
                      }),
                    }),
                  }),
                  (0, s.jsx)('div', {
                    className: 'col col-md gx-lg-2',
                    children: (0, s.jsx)(C.Z, {
                      title_tag: e.settings.title_tag,
                      title_class: e.settings.title_class,
                      title_row: e.settings.title_row,
                      children: (0, s.jsx)(A(), {
                        prefetch: !1,
                        href: e.posts.url,
                        children: e.posts.title,
                      }),
                    }),
                  }),
                ],
              }),
            }),
          })
        );
      let H = (e) => {
          var t;
          let i = {
            width: 80,
            height: 70,
            title_tag: 'div',
            title_class: 'n1-aside-title-1',
            title_row: 'text-limit-2-row',
            useImageClass: 'thumb-h70',
          };
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)('div', { className: 'widget-border-top-2 mt-20 ' }),
              (0, s.jsx)(C.Z, {
                title_tag: 'div',
                title_class: 'n1-aside-header-title',
                title_row: 'text-limit-2-row',
                children: '핫뉴스',
              }),
              (0, s.jsx)('div', {
                className: '',
                children:
                  null === (t = e.data) || void 0 === t
                    ? void 0
                    : t.slice(0, 5).map((e, t) => (0, s.jsx)(X, { posts: e, settings: i }, t)),
              }),
            ],
          });
        },
        V = (e, t, i) => {
          var a, r;
          let l = Math.floor(Math.random() * e.data.length),
            n = [];
          return (
            (n =
              null === (a = e.data) || void 0 === a
                ? void 0
                : a.filter((e, i) => (e.id === t && (l = i), !0))),
            i && (n = null === (r = e.data) || void 0 === r ? void 0 : r.filter((e, t) => l !== t)),
            (0, s.jsxs)('div', {
              className: 'article-related mb-20',
              style: { minHeight: i ? '170px' : '200px' },
              children: [
                (0, s.jsx)(B.Z, { orientation: 'left', children: '지금 뜨는 뉴스' }),
                (0, s.jsx)('ul', {
                  children: n.map((e, t) =>
                    (0, s.jsx)(
                      'li',
                      {
                        className: 'text-limit-1-row',
                        style: { height: '2rem' },
                        children: i
                          ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                (0, s.jsx)(R.Z, {}),
                                (0, s.jsx)(A(), {
                                  prefetch: !1,
                                  href: ''.concat(e.url),
                                  children: e.title,
                                }),
                              ],
                            })
                          : t !== l
                          ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                (0, s.jsx)(R.Z, {}),
                                (0, s.jsx)(A(), {
                                  prefetch: !1,
                                  href: ''.concat(e.url),
                                  children: e.title,
                                }),
                              ],
                            })
                          : (0, s.jsx)('iframe', {
                              src: '/ads/mobile/mobile-08.html',
                              width: '100%',
                              height: '26',
                              scrolling: 'no',
                            }),
                      },
                      t
                    )
                  ),
                }),
              ],
            })
          );
        };
      var Y = a.memo((e) => {
          let [t, i] = (0, a.useState)(),
            s = async () => {
              let t = await (0, O.r8)({ section: 'hotnews', limit: e.listCount });
              t && i(t.data);
            };
          if (
            ((0, a.useEffect)(() => {
              s();
            }, [e.listCount]),
            !t)
          )
            return null;
          switch (e.layoutType) {
            case 'PC_CONTENTS':
              return H(t);
            case 'MOBILE_CONTENTS':
              return V(t, e.articleId, e.isDaumPick);
          }
        }),
        J = i(65211),
        W = i(82831),
        q = !0,
        K = (e) => {
          var t, i, r, m, p, u, w, _, A, k, S;
          let {
              id: I,
              section: Z,
              sectionId: C,
              sectionName: O,
              subsections: T,
              articleView: D,
              currentUrl: M,
              isMobileDevice: B,
              isNoindex: R,
            } = e,
            [X, H] = (0, x.fP)(['ArticleBodyFontSize']),
            [V, q] = (0, a.useState)(!1),
            [K, G] = (0, a.useState)('mainnews' === (0, f.U)(M, 'kakao_from')),
            [Q, $] = (0, a.useState)(B),
            [ee, et] = (0, a.useState)(!0),
            [ei, es] = (0, a.useState)(!!C && 109 === C),
            [ea, er] = (0, a.useState)(!1);
          if (
            ((0, a.useEffect)(
              () => (
                er(window.navigator.userAgent.includes('News1-')),
                q(!0),
                (0, y.LV)(M),
                'mainnews' === (0, f.U)(M, 'kakao_from')
                  ? N('m.news1.kr/daummain')
                  : N(B ? 'm.news1.kr' : 'news1.kr'),
                (0, y.LA)(document.referrer),
                (0, W.SN)(eo),
                ee || et(!0),
                'mainnews' === (0, f.U)(M, 'kakao_from') ? G(!0) : G(!1),
                es(!!C && 109 === C),
                () => {
                  eh(0);
                }
              ),
              [I, M]
            ),
            !X.ArticleBodyFontSize)
          ) {
            let e = new Date();
            e.setDate(e.getDate() + 30),
              H('ArticleBodyFontSize', 'n1-article-content', { expires: e });
          }
          let [el, en] = (0, a.useState)(X.ArticleBodyFontSize),
            [eo, ed] = (0, a.useState)(D),
            [ec, eh] = (0, a.useState)(0),
            [em, ep] = (0, a.useState)(!0),
            eu = (0, a.useRef)(null),
            ew = (0, a.useCallback)(
              async (e, t) => {
                let [i] = e;
                i.isIntersecting && ec > -1 && (t.unobserve(i.target), t.observe(i.target));
              },
              [ec]
            );
          if (
            ((0, a.useEffect)(() => {
              en(X.ArticleBodyFontSize);
            }, [X.ArticleBodyFontSize]),
            (0, a.useEffect)(() => {
              ep(!0), eh(0), ed(D);
            }, [D.id]),
            (0, a.useEffect)(() => {
              if (!eu.current) return;
              eu.current.getBoundingClientRect().top > 550 ? ep(!0) : ep(!1);
              let e = new IntersectionObserver(ew, { threshold: 0 });
              return eu.current && e.observe(eu.current), () => e && e.disconnect();
            }, [ec, ew]),
            (0, a.useEffect)(() => {
              let e = () => {
                let e = window.scrollY;
                e !== ec && eh(e);
              };
              return (
                document.addEventListener('scroll', e),
                () => {
                  document.removeEventListener('scroll', e);
                }
              );
            }, [ec]),
            !D)
          )
            return (0, s.jsx)(c.Z, {});
          let eg =
              null !==
                (w =
                  null === (i = eo.contentArrange) || void 0 === i
                    ? void 0
                    : null === (t = i[0]) || void 0 === t
                    ? void 0
                    : t.resolution) && void 0 !== w
                ? w
                : null,
            ex = eo.url,
            ev = null !== (_ = eo.sns_title) && void 0 !== _ ? _ : eo.title,
            ej = null !== (A = eo.sns_image) && void 0 !== A ? A : eo.image,
            eb = eo.sub_title ? eo.sub_title + ' ' + eo.description : eo.description;
          (eb =
            null == eb
              ? void 0
              : eb
                  .replace('<br>', ' ')
                  .replace(/(\r\n\t|\n|\r\t)/gm, ' ')
                  .substring(0, 160)),
            (eo.description = eb);
          let ey =
            null !== (k = null === (r = eo.glossary) || void 0 === r ? void 0 : r.length) &&
            void 0 !== k
              ? k
              : 0;
          return (0, s.jsxs)(n.Z, {
            page_id: 'article',
            title: ''.concat(eo.title),
            description: ''.concat(eb),
            section: O,
            url: ex,
            canonicalUrl: eo.canonical_url,
            ogImage: ej,
            isMobileDevice: Q,
            currentUrl: M,
            children: [
              (0, s.jsx)(b.dX, { article: eo }),
              (0, s.jsxs)(l(), {
                children: [
                  (0, s.jsx)('meta', { property: 'dable:item_id', content: ex }),
                  (0, s.jsx)('meta', {
                    property: 'dable:author',
                    content: null !== (S = eo.author) && void 0 !== S ? S : '뉴스1',
                  }),
                  eo.category_array &&
                    eo.category_array.map((e, t) =>
                      (0, s.jsx)(
                        'meta',
                        {
                          property: 'article:section'.concat(0 == t ? '' : t + 1),
                          content: e.name,
                        },
                        'article:section'.concat(0 == t ? '' : t + 1)
                      )
                    ),
                  R && (0, s.jsx)('meta', { name: 'robots', content: 'noindex' }),
                ],
              }),
              (0, s.jsxs)('main', {
                className: 'overflow-hidden',
                children: [
                  (0, s.jsx)('div', { id: 'newscoverEL' }),
                  !Q &&
                    (0, s.jsx)('div', {
                      className: 'mt-10',
                      style: {
                        width: '100%',
                        textAlign: 'center',
                        lineHeight: 0,
                        background: '#085813',
                      },
                      children: (0, s.jsx)('iframe', {
                        className: 'wide-banner',
                        src: 'https://special.news1.kr/election/20250603/inc/common.banner.pc_article_t.php',
                        style: {
                          width: '100%',
                          maxWidth: '1046px',
                          aspectRatio: '19/2',
                          overflow: 'auto',
                        },
                      }),
                    }),
                  (0, s.jsx)('div', {
                    className: 'container ',
                    children: (0, s.jsxs)('div', {
                      className: 'row justify-content-center position-relative',
                      children: [
                        (0, s.jsx)('div', {
                          className: 'mr-50',
                          children: (0, s.jsx)('div', {
                            className: 'mb-10 position-fixed '.concat(
                              ec > 150 ? 'top-0 pt-20' : 'pt-40'
                            ),
                            children: (0, s.jsx)(v.Z, {
                              isArticleState: em,
                              browserType: 'desktop',
                              url: ex,
                              title: ev,
                              imageUrl: ej,
                              content: eo.contentArrange,
                              sub_title: eo.sub_title,
                              published_time: eo.published_time,
                              pubdate_at: eo.pubdate_at,
                              modified_time: eo.modified_time,
                              updated_at: eo.updated_at,
                              editor_comment: eo.editor_comment,
                              reporter_box: eo.reporter_box,
                              contentsType: 'article',
                              glossary: eo.glossary,
                            }),
                          }),
                        }),
                        !Q &&
                          (0, s.jsxs)(s.Fragment, {
                            children: [
                              (0, s.jsxs)('div', {
                                className: 'd-none d-md-none d-lg-block mr-400 position-absolute',
                                style: { width: 190, top: 190 },
                                children: [
                                  (0, s.jsx)('div', {
                                    className: 'mb-10 ads-article-warp-bg-none text-end',
                                    style: { width: '160px', height: '120px', left: 20 },
                                    children: (0, s.jsx)(U.Z, {
                                      src: '/ads/desktop/desktop-article-wing-banner-left.html',
                                      width: '85',
                                      height: '100',
                                      articleId: I,
                                    }),
                                  }),
                                  (0, s.jsx)('div', {
                                    className: 'mb-10 ads-article-warp',
                                    style: { width: '160px', height: '600px', left: 20 },
                                    children: (0, s.jsx)(U.Z, {
                                      src: '/ads/desktop/desktop-01.html',
                                      width: '160',
                                      height: '600',
                                      articleId: I,
                                    }),
                                  }),
                                ],
                              }),
                              (0, s.jsx)('div', {
                                className:
                                  'd-none d-md-none d-lg-block position-absolute ml-380  ml-100 ',
                                children: (0, s.jsxs)('div', {
                                  className: 'mb-10 position-top-right pt-170',
                                  children: [
                                    (0, s.jsx)('div', {
                                      className: 'mb-20',
                                      children: (0, s.jsx)(U.Z, {
                                        src: '/ads/desktop/desktop-article-wing-banner-right.html',
                                        width: '85',
                                        height: '100',
                                        articleId: I,
                                      }),
                                    }),
                                    (0, s.jsx)('div', {
                                      className: 'ads-article-warp mb-20 ',
                                      style: { width: '160px', height: '600px' },
                                      children: (0, s.jsx)(U.Z, {
                                        src: '/ads/desktop/desktop-04.html',
                                        width: '160',
                                        height: '600',
                                        articleId: I,
                                      }),
                                    }),
                                    (0, s.jsx)('div', {
                                      className: 'ads-article-warp ',
                                      style: { width: '160px', height: '600px' },
                                      children: (0, s.jsx)(U.Z, {
                                        src: '/ads/desktop/desktop-06.html',
                                        width: '160',
                                        height: '600',
                                        articleId: I,
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        (0, s.jsxs)('div', {
                          className: 'row justify-content-center',
                          children: [
                            (0, s.jsxs)('div', {
                              className: 'col-lg-10 mt-10 gx-0 position-relative',
                              children: [
                                Q &&
                                  !K &&
                                  (0, s.jsx)('div', {
                                    className: 'mb-10',
                                    style: { width: '100%' },
                                    children: (0, s.jsx)('iframe', {
                                      src: 'https://special.news1.kr/election/20250603/inc/common.banner.mobile_article.php',
                                      style: { width: '100%', aspectRatio: '95/14' },
                                    }),
                                  }),
                                (0, s.jsx)('div', {
                                  className: 'mt-10',
                                  children: (0, s.jsx)(j.TK, {
                                    category: eo.category_array,
                                    currentCategory: T,
                                    currentCategoryKor: O,
                                  }),
                                }),
                                (0, s.jsx)('h1', {
                                  className: 'article-h2-header-title mb-40',
                                  children: eo.title,
                                }),
                                eo.reporter_box &&
                                  (0, s.jsx)('div', {
                                    className: 'box--report-top',
                                    children: (0, s.jsx)(j.v$, { report: eo.reporter_box }),
                                  }),
                                (0, s.jsx)('div', {
                                  className: 'mb-20 mt-5',
                                  children: (0, s.jsx)(j.Zs, {
                                    published_time: ''.concat(eo.published_time),
                                    created: ''.concat(eo.pubdate_at),
                                    modified_time: eo.modified_time,
                                    updated: eo.updated_at && '업데이트 '.concat(eo.updated_at),
                                  }),
                                }),
                                (0, s.jsx)('div', {
                                  className:
                                    ' end-0 position-right-bottom mb-6 d-block d-md-block d-lg-none',
                                  children: (0, s.jsx)(v.Z, {
                                    isArticleState: em,
                                    browserType: 'mobile-body',
                                    url: ex,
                                    title: ev,
                                    imageUrl: ej,
                                    content: eo.contentArrange,
                                    sub_title: eo.sub_title,
                                    published_time: eo.published_time,
                                    pubdate_at: eo.pubdate_at,
                                    modified_time: eo.modified_time,
                                    updated_at: eo.updated_at,
                                    editor_comment: eo.editor_comment,
                                    reporter_box: eo.reporter_box,
                                    contentsType: 'article',
                                  }),
                                }),
                                'high' === eg && (0, s.jsx)('div', { className: 'border-bottom' }),
                              ],
                            }),
                            'high' === eg && eo.sub_title
                              ? (0, s.jsx)('div', {
                                  className: 'col-lg-10 gx-0 position-relative my-3',
                                  children: (0, s.jsx)('h2', {
                                    className: 'article-h2-header-subtitle2',
                                    children: (0, d.ZP)(eo.sub_title.toString()),
                                  }),
                                })
                              : (0, s.jsx)('div', {
                                  className: 'col-lg-10 gx-0 position-relative my-2',
                                }),
                            !Q &&
                              eo.contentArrange &&
                              (0, s.jsx)('div', {
                                className: 'row  col-lg-10 gx-0',
                                children: (0, s.jsx)(j.rz, {
                                  posts: eo.contentArrange.slice(0, 1),
                                  images: eo.image_array,
                                }),
                              }),
                            (0, s.jsxs)('article', {
                              className: 'col-lg-7 article-padding-lg-right position-relative gx-0',
                              children: [
                                (0, s.jsxs)('section', {
                                  className: 'row',
                                  children: [
                                    'high' !== eg && eo.sub_title
                                      ? (0, s.jsx)('div', {
                                          className: 'position-relative',
                                          children: (0, s.jsx)('h2', {
                                            className:
                                              'article-h2-header-subtitle2 border-top pt-15 pb-15',
                                            children: (0, d.ZP)(eo.sub_title.toString()),
                                          }),
                                        })
                                      : 'high' !== eg &&
                                        (0, s.jsx)('div', {
                                          className: 'position-relative',
                                          children: (0, s.jsx)('div', {
                                            className: 'border-top pt-20',
                                          }),
                                        }),
                                    eo.editor_comment &&
                                      (0, s.jsx)('div', {
                                        className: 'editor_comment',
                                        children: (0, s.jsxs)('p', {
                                          className: 'border-bottom py-3 '.concat(
                                            eo.sub_title ? 'border-top' : ''
                                          ),
                                          children: [
                                            (0, s.jsxs)('span', {
                                              className: 'fs-5 pr-5 font-weight-500',
                                              children: [(0, s.jsx)(h.Z, {}), ' 편집자주 ...'],
                                            }),
                                            (0, d.ZP)(
                                              ''.concat(
                                                null === (m = eo.editor_comment) || void 0 === m
                                                  ? void 0
                                                  : m.toString()
                                              )
                                            ),
                                          ],
                                        }),
                                      }),
                                    eo.contentArrange &&
                                      (0, s.jsx)(j.VY, {
                                        posts: eo.contentArrange,
                                        fontSize: el,
                                        images: eo.image_array,
                                        viewMode: !0,
                                        isDaumPick: K,
                                        isMobile: Q,
                                        articleId: eo.id,
                                        glossary: eo.glossary,
                                      }),
                                    ey > 0 && (0, s.jsx)(j.Tg, { posts: eo.glossary }),
                                    eo.keywords_array &&
                                      (0, s.jsx)(j.LM, {
                                        posts: eo.keywords_array,
                                        title: '관련 키워드',
                                      }),
                                    !ea &&
                                      Q &&
                                      !K &&
                                      (0, s.jsx)('div', {
                                        className: 'ads-article-warp-bg-none mt-30',
                                        style: { width: '100%', height: '100px' },
                                        children: (0, s.jsx)(U.Z, {
                                          src: '/ads/mobile/mobile-09.html',
                                          width: '100%',
                                          height: '100',
                                          articleId: I,
                                        }),
                                      }),
                                    !ea &&
                                      Q &&
                                      !K &&
                                      (0, s.jsx)('div', {
                                        className: 'ads-article-warp mt-30',
                                        style: { width: '100%', height: '100px' },
                                        children: (0, s.jsx)(U.Z, {
                                          src: '/ads/mobile/mobile-10.html',
                                          width: '100%',
                                          height: '100',
                                          articleId: I,
                                        }),
                                      }),
                                    !ea &&
                                      Q &&
                                      K &&
                                      (0, s.jsx)('div', {
                                        className: 'ads-article-warp mt-30',
                                        style: { width: '100%', height: '315px' },
                                        children: (0, s.jsx)(U.Z, {
                                          src: '/ads/mobile/mobile-04-daum.html',
                                          width: '100%',
                                          height: '315',
                                          articleId: I,
                                        }),
                                      }),
                                    eo.reporter_box &&
                                      (0, s.jsx)(j.R5, { report: eo.reporter_box }),
                                    !Q &&
                                      (0, s.jsx)('div', {
                                        className: 'ads-article-warp-bg-none mt-30',
                                        id: 'desktop-15',
                                        style: { width: '100%', height: '35px' },
                                        children: (0, s.jsx)(U.Z, {
                                          src: '/ads/desktop/desktop-15.html',
                                          width: '100%',
                                          height: '35',
                                          articleId: I,
                                        }),
                                      }),
                                    !Q &&
                                      (0, s.jsx)('div', {
                                        className: 'mt-30',
                                        style: { width: '100%', height: '450px' },
                                        children: (0, s.jsx)(U.Z, {
                                          src: '/ads/desktop/desktop-16.html',
                                          width: '100%',
                                          height: '450',
                                          articleId: I,
                                        }),
                                      }),
                                    !ea &&
                                      Q &&
                                      !K &&
                                      (0, s.jsx)('div', {
                                        className: 'ads-article-warp mt-30',
                                        style: { width: '100%', height: '200px' },
                                        children: (0, s.jsx)(U.Z, {
                                          src: '/ads/mobile/mobile-11.html',
                                          width: '100%',
                                          height: '200',
                                          articleId: I,
                                        }),
                                      }),
                                    !ea &&
                                      Q &&
                                      K &&
                                      (0, s.jsx)('div', {
                                        className: 'ads-article-warp mt-30',
                                        style: { width: '100%', height: '300px' },
                                        children: (0, s.jsx)(U.Z, {
                                          src: '/ads/mobile/mobile-05-daum.html',
                                          width: '100%',
                                          height: '300',
                                          articleId: I,
                                        }),
                                      }),
                                    'entertain' !== Z &&
                                      eo.keywords_related &&
                                      (null === (p = eo.keywords_related) || void 0 === p
                                        ? void 0
                                        : p.length) > 0 &&
                                      (0, s.jsx)(j.Bv, {
                                        posts: eo.keywords_related,
                                        title: '관련 기사',
                                      }),
                                    'entertain' === Z &&
                                      eo.gulbi_array &&
                                      (null === (u = eo.gulbi_array) || void 0 === u
                                        ? void 0
                                        : u.length) > 0 &&
                                      (0, s.jsx)(j.Bv, {
                                        posts: eo.gulbi_array,
                                        title: '주요 기사',
                                      }),
                                    !Q &&
                                      (0, s.jsx)('div', {
                                        className: 'ads-article-warp mt-30',
                                        style: { width: '100%', height: '250px' },
                                        children: (0, s.jsx)(U.Z, {
                                          src: '/ads/desktop/desktop-19.html',
                                          width: '100%',
                                          height: '250',
                                          articleId: I,
                                        }),
                                      }),
                                    !Q &&
                                      (0, s.jsx)('div', {
                                        className: 'ads-article-warp mt-30',
                                        style: { width: '100%', height: '300px' },
                                        children: (0, s.jsx)(U.Z, {
                                          src: '/ads/desktop/desktop-20.html',
                                          width: '100%',
                                          height: '300',
                                          articleId: I,
                                        }),
                                      }),
                                    !Q &&
                                      (0, s.jsx)('div', {
                                        className: 'ads-article-warp mt-30',
                                        style: { width: '100%', height: '200px' },
                                        children: (0, s.jsx)(U.Z, {
                                          src: '/ads/desktop/desktop-21.html',
                                          width: '100%',
                                          height: '200',
                                          articleId: I,
                                        }),
                                      }),
                                    !Q &&
                                      (0, s.jsx)('div', {
                                        className: 'ads-article-warp mt-30',
                                        style: { width: '100%', height: '250px' },
                                        children: (0, s.jsx)(U.Z, {
                                          src: '/ads/desktop/desktop-22.html',
                                          width: '100%',
                                          height: '250',
                                          articleId: I,
                                        }),
                                      }),
                                    !ea &&
                                      Q &&
                                      !K &&
                                      (0, s.jsx)('div', {
                                        className: 'ads-article-warp-bg-none mt-30',
                                        style: { width: '100%', height: '140px' },
                                        children: (0, s.jsx)(U.Z, {
                                          src: '/ads/mobile/mobile-12.html',
                                          width: '100%',
                                          height: '140',
                                          articleId: I,
                                        }),
                                      }),
                                    !ea &&
                                      Q &&
                                      !K &&
                                      (0, s.jsx)('div', {
                                        className: 'ads-article-warp mt-30',
                                        style: { width: '100%', height: '100px' },
                                        children: (0, s.jsx)(U.Z, {
                                          src: '/ads/mobile/mobile-13.html',
                                          width: '100%',
                                          height: '100',
                                          articleId: I,
                                        }),
                                      }),
                                    !ea &&
                                      Q &&
                                      K &&
                                      (0, s.jsx)('div', {
                                        className: 'ads-article-warp mt-30',
                                        style: { width: '100%', height: '300px' },
                                        children: (0, s.jsx)(U.Z, {
                                          src: '/ads/mobile/mobile-06-daum.html',
                                          width: '100%',
                                          height: '300',
                                          articleId: I,
                                        }),
                                      }),
                                    V &&
                                      !ea &&
                                      !K &&
                                      ei &&
                                      (0, s.jsx)(z.UR, {
                                        src: 'https://api.aedi.ai/common/js/v1/aedi-ad-magazin.js',
                                        onLoad: () => {
                                          let e = document.createElement('link');
                                          (e.rel = 'stylesheet'),
                                            (e.href =
                                              'https://api.aedi.ai/common/css/v1/aedi-ad.css'),
                                            document.head.appendChild(e);
                                        },
                                        onReady: () => {
                                          let e = Q
                                            ? '532b81fa223a1b1ec74139a5b8151d12'
                                            : '9e406957d45fcb6c6f38c2ada7bace91';
                                          if (window.Aedi)
                                            try {
                                              let t = new window.Aedi();
                                              window.aedi_api_key = '';
                                              let i = eo.published_time,
                                                s = document.querySelectorAll(
                                                  'figure img, #articleBodyContent figure img'
                                                );
                                              t.adOpen(e, s, i);
                                            } catch (e) {
                                              console.error(e);
                                            }
                                        },
                                        articleId: I,
                                      }),
                                  ],
                                }),
                                (0, s.jsx)('div', { ref: eu }),
                              ],
                            }),
                            (0, s.jsx)('aside', {
                              className: 'col-lg-3 ps-lg-4  me-lg-2 gx-0  ',
                              children: (0, s.jsxs)('div', {
                                className: ' ms-0 gx-0',
                                children: [
                                  !Q &&
                                    (0, s.jsx)('div', {
                                      className: 'ads-article-warp  w-md-d-none',
                                      style: { width: '300px', height: '250px' },
                                      children: (0, s.jsx)(U.Z, {
                                        src: '/ads/desktop/desktop-03.html',
                                        width: '300',
                                        height: '250',
                                        articleId: I,
                                      }),
                                    }),
                                  (0, s.jsx)(o.Z, { section_id: 'ALL' }),
                                  !Q &&
                                    (0, s.jsx)('div', {
                                      className: 'ads-article-warp mt-30 w-md-d-none',
                                      style: { width: '300px', height: '250px' },
                                      children: (0, s.jsx)(U.Z, {
                                        src: '/ads/desktop/desktop-05.html',
                                        width: '300',
                                        height: '250',
                                        articleId: I,
                                      }),
                                    }),
                                  !Q &&
                                    (0, s.jsx)('div', {
                                      className: 'ads-article-warp mt-30 w-md-d-none',
                                      style: { width: '300px', height: '250px' },
                                      children: (0, s.jsx)(U.Z, {
                                        src: '/ads/desktop/desktop-07.html',
                                        width: '300',
                                        height: '250',
                                        articleId: I,
                                      }),
                                    }),
                                  !ea &&
                                    Q &&
                                    !K &&
                                    (0, s.jsx)('div', {
                                      className: 'ads-article-warp mt-30',
                                      style: { width: '100%', height: '210px' },
                                      children: (0, s.jsx)(U.Z, {
                                        src: '/ads/mobile/mobile-14.html',
                                        width: '100%',
                                        height: '210',
                                        articleId: I,
                                      }),
                                    }),
                                  !ea &&
                                    Q &&
                                    !K &&
                                    (0, s.jsx)('div', {
                                      className: 'ads-article-warp mt-30',
                                      style: { width: '100%', height: '400px' },
                                      children: (0, s.jsx)(U.Z, {
                                        src: '/ads/mobile/mobile-15.html',
                                        width: '100%',
                                        height: '400',
                                        articleId: I,
                                      }),
                                    }),
                                  !ea &&
                                    Q &&
                                    !K &&
                                    (0, s.jsx)('div', {
                                      className: 'ads-article-warp mt-30',
                                      style: { width: '100%', height: '210px' },
                                      children: (0, s.jsx)(U.Z, {
                                        src: '/ads/mobile/mobile-16.html',
                                        width: '100%',
                                        height: '210',
                                        articleId: I,
                                      }),
                                    }),
                                  !ea &&
                                    Q &&
                                    !K &&
                                    (0, s.jsx)('div', {
                                      className: 'ads-article-warp mt-30',
                                      style: { width: '100%', height: '250px' },
                                      children: (0, s.jsx)(U.Z, {
                                        src: '/ads/mobile/mobile-17.html',
                                        width: '100%',
                                        height: '250',
                                        articleId: I,
                                      }),
                                    }),
                                  !ea &&
                                    Q &&
                                    K &&
                                    (0, s.jsx)('div', {
                                      className: 'ads-article-warp mt-30',
                                      style: { width: '100%', height: '500px' },
                                      children: (0, s.jsx)(U.Z, {
                                        src: '/ads/mobile/mobile-08-daum.html',
                                        width: '100%',
                                        height: '500',
                                        articleId: I,
                                      }),
                                    }),
                                  (0, s.jsx)('div', {
                                    className: 'w-lg-300',
                                    style: { minHeight: '230px' },
                                    children: (0, s.jsx)(E, { listCount: 2 }),
                                  }),
                                  (0, s.jsx)('div', {
                                    className: 'w-lg-300',
                                    style: { minHeight: '230px' },
                                    children: (0, s.jsx)(P, { listCount: 2 }),
                                  }),
                                  !Q &&
                                    (0, s.jsx)('div', {
                                      className: 'ads-article-warp mt-30 w-md-d-none',
                                      style: { width: '300px', height: '292px' },
                                      children: (0, s.jsx)(U.Z, {
                                        src: '/ads/desktop/desktop-09.html',
                                        width: '300',
                                        height: '292',
                                        articleId: I,
                                      }),
                                    }),
                                  !Q &&
                                    (0, s.jsx)('div', {
                                      className: 'ads-article-warp mt-30 w-md-d-none',
                                      style: { width: '300px', height: '250px' },
                                      children: (0, s.jsx)(U.Z, {
                                        src: '/ads/desktop/desktop-10.html',
                                        width: '300',
                                        height: '250',
                                        articleId: I,
                                      }),
                                    }),
                                  !Q &&
                                    (0, s.jsx)('div', {
                                      className: 'w-lg-300',
                                      children: (0, s.jsx)(Y, {
                                        listCount: 5,
                                        layoutType: 'PC_CONTENTS',
                                      }),
                                    }),
                                  (() => {
                                    if (!Q)
                                      return K
                                        ? (0, s.jsx)('div', {
                                            className: 'ads-article-warp mt-30 w-md-d-none',
                                            style: { width: '300px', height: '280px' },
                                            children: (0, s.jsx)(U.Z, {
                                              src: '/ads/desktop/desktop-12-daum.html',
                                              width: '300',
                                              height: '280',
                                              articleId: I,
                                            }),
                                          })
                                        : (0, s.jsx)('div', {
                                            className: 'ads-article-warp mt-30 w-md-d-none',
                                            style: { width: '300px', height: '280px' },
                                            children: (0, s.jsx)(U.Z, {
                                              src: '/ads/desktop/desktop-12-public.html',
                                              width: '300',
                                              height: '280',
                                              articleId: I,
                                            }),
                                          });
                                  })(),
                                  !Q &&
                                    (0, s.jsx)('div', {
                                      className: 'ads-article-warp mt-30 w-md-d-none',
                                      style: { width: '300px', height: '300px' },
                                      children: (0, s.jsx)(U.Z, {
                                        src: '/ads/desktop/desktop-13.html',
                                        width: '300',
                                        height: '300',
                                        articleId: I,
                                      }),
                                    }),
                                  !Q &&
                                    (0, s.jsxs)(s.Fragment, {
                                      children: [
                                        (0, s.jsx)('div', {
                                          className: 'ads-article-warp mt-30 w-md-d-none',
                                          style: { width: '300px', height: '250px' },
                                          children: (0, s.jsx)(U.Z, {
                                            src: '/ads/desktop/desktop-14.html',
                                            width: '300',
                                            height: '250',
                                            articleId: I,
                                          }),
                                        }),
                                        (0, s.jsx)(J.gl, {
                                          adslotId: 474,
                                          sectionID: D.category_id,
                                        }),
                                      ],
                                    }),
                                  !Q &&
                                    (0, s.jsx)('div', {
                                      className: 'w-lg-300',
                                      style: { minHeight: '300px' },
                                      children: (0, s.jsx)(L, { listCount: 4 }),
                                    }),
                                  !ea &&
                                    Q &&
                                    !K &&
                                    (0, s.jsx)('div', {
                                      className: 'ads-article-warp mt-30',
                                      style: { width: '100%', height: '280px' },
                                      children: (0, s.jsx)(U.Z, {
                                        src: '/ads/mobile/mobile-18.html',
                                        width: '100%',
                                        height: '280',
                                        articleId: I,
                                      }),
                                    }),
                                  !ea &&
                                    Q &&
                                    (0, s.jsx)('div', {
                                      style: { minHeight: '580px' },
                                      children: (0, s.jsx)(F, {
                                        boxType: 'typeA',
                                        seriesUri: 'this-that',
                                        itemCount: 5,
                                      }),
                                    }),
                                  !ea &&
                                    Q &&
                                    !K &&
                                    (0, s.jsx)('div', {
                                      className: 'ads-article-warp mt-30',
                                      style: { width: '100%', height: '300px' },
                                      children: (0, s.jsx)(U.Z, {
                                        src: '/ads/mobile/mobile-25.html',
                                        width: '100%',
                                        height: '300',
                                        articleId: I,
                                      }),
                                    }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, s.jsx)('div', {
                className: 'd-none',
                children: Q
                  ? (0, s.jsx)(U.Z, {
                      src: '/ads/mobile/mobile-23-public-pv.html',
                      width: '0',
                      height: '0',
                      articleId: I,
                    })
                  : (0, s.jsx)(U.Z, {
                      src: '/ads/desktop/desktop-25-public-pv.html',
                      width: '0',
                      height: '0',
                      articleId: I,
                    }),
              }),
              K &&
                (0, s.jsx)('div', {
                  className: 'd-none',
                  children: Q
                    ? (0, s.jsx)(U.Z, {
                        src: '/ads/mobile/mobile-23-daum-pv.html',
                        width: '0',
                        height: '0',
                        articleId: I,
                      })
                    : (0, s.jsx)(U.Z, {
                        src: '/ads/desktop/desktop-25-daum-pv.html',
                        width: '0',
                        height: '0',
                        articleId: I,
                      }),
                }),
              !ea &&
                Q &&
                !K &&
                ee &&
                (0, s.jsxs)('div', {
                  className: 'ad_mobile_21 ads-article-warp',
                  children: [
                    (0, s.jsx)(g, {
                      className: 'ad-close-mobile-21-bottom',
                      onClick: () => et(!1),
                    }),
                    (0, s.jsx)(U.Z, {
                      src: '/ads/mobile/mobile-21.html',
                      width: '100%',
                      height: '50',
                      articleId: I,
                    }),
                  ],
                }),
              !K &&
                V &&
                document &&
                (Q
                  ? ea
                    ? (0, s.jsx)(s.Fragment, {})
                    : (0, s.jsx)(z.UR, {
                        src: '//www.mediacategory.com/servlet/adMediation?from='.concat(
                          escape(document.referrer),
                          '&s=94814&platform=M'
                        ),
                        articleId: eo.id,
                      })
                  : (0, s.jsx)(z.UR, {
                      src: '//www.mediacategory.com/servlet/adMediation?from='.concat(
                        escape(document.referrer),
                        '&s=933326&platform=W'
                      ),
                      articleId: eo.id,
                    })),
            ],
          });
        };
    },
    82831: function (e, t, i) {
      'use strict';
      i.d(t, {
        Md: function () {
          return r;
        },
        SN: function () {
          return a;
        },
        UN: function () {
          return l;
        },
      });
      var s = i(87066);
      let a = (e) => {
          var t, i, s;
          let a = window.location,
            r = new FormData(),
            l =
              null === (i = e.reporter_box) || void 0 === i
                ? void 0
                : null === (t = i.map((e) => e.id)) || void 0 === t
                ? void 0
                : t.join(','),
            d = btoa(
              'article|'
                .concat(e.id, '|1|')
                .concat(
                  n(null !== (s = e.published_time) && void 0 !== s ? s : ''),
                  '|article_view|1|'
                )
                .concat(l)
            );
          r.append('param', d),
            r.append('referer', document.referrer || a.host),
            r.append('domain', a.host),
            o(r);
        },
        r = (e) => {
          var t, i, s;
          let a = window.location,
            r = new FormData(),
            l =
              null === (i = e.reporter_box) || void 0 === i
                ? void 0
                : null === (t = i.map((e) => e.id)) || void 0 === t
                ? void 0
                : t.join(','),
            d = btoa(
              'photo|'
                .concat(e.id, '|1|')
                .concat(
                  n(null !== (s = e.published_time) && void 0 !== s ? s : ''),
                  '|photo_view|1|'
                )
                .concat(l)
            );
          r.append('param', d),
            r.append('referer', document.referrer || a.host),
            r.append('domain', a.host),
            o(r);
        },
        l = (e) => {
          var t, i, s;
          let a = window.location,
            r = new FormData(),
            l =
              null === (i = e.reporter_box) || void 0 === i
                ? void 0
                : null === (t = i.map((e) => e.id)) || void 0 === t
                ? void 0
                : t.join(','),
            d = btoa(
              'video|'
                .concat(e.id, '|1|')
                .concat(n(null !== (s = e.pubdate) && void 0 !== s ? s : ''), '|video_view|1|')
                .concat(l)
            );
          r.append('param', d),
            r.append('referer', document.referrer || a.host),
            r.append('domain', a.host),
            o(r);
        },
        n = (e) => {
          let t = new Date(e);
          return ''
            .concat(t.getFullYear())
            .concat(t.getMonth() + 1)
            .concat(10 > t.getDate() ? '0' + t.getDate() : t.getDate());
        },
        o = async (e) => {
          await s.Z.post('https://statistics.news1.kr/logger/v4.php', e, {
            headers: { 'content-type': 'multipart/form-data' },
          });
        };
    },
  },
  function (e) {
    e.O(0, [1664, 1495, 5675, 3628, 2140, 5465, 3435, 4939, 2888, 9774, 179], function () {
      return e((e.s = 88701));
    }),
      (_N_E = e.O());
  },
]);
