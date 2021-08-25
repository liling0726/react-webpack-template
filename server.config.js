module.exports = {
    // mock 本地mock server 服务器连接
    mockType: 'mock',
    proxy: {
        '/rest':{
            target: 'https://op-admin.test.gifshow.com',
            changeOrigin: true,
            withCredentials: true,
            headers: { Cookie: '_did=web_2403052232667F6E; ksCorpDeviceid=4284495b-2699-49bf-b02c-cd44589edcde; adm-did=nAqIs7k8paBLJg3oEljM9KNsAe4wJ5nuzCufpc5XwAHOxB6SBtVGjn625esQMeG8; JSESSIONID=FB836F3F887D633B56462017272DAFC7; adm-did=nAqIs7k8paBLJg3oEljM9KNsAe4wJ5nuzCufpc5XwAHOxB6SBtVGjn625esQMeG8; _ga=GA1.2.997379290.1615461019; _ga_QFWN0KYHTY=GS1.1.1615467380.2.0.1615467380.0; Hm_lvt_86a27b7db2c5c0ae37fee4a8a35033ee=1617334331; Hm_lpvt_86a27b7db2c5c0ae37fee4a8a35033ee=1617334410; soft_did=1619580708547; admin_corp_tk=cp_bGcRlHjUCuaYanujDpDT1nfm5GnBBOiC-2147332843; clientid=3; didv=1622454220288; client_key=65890b29; apdid=1d962719-2a81-4f8f-af53-fbf92e8d0345fef5cc7929dcecec6487051bf0354971:1624516739:1; _ga_KW797CK21K=GS1.1.1624523896.1.1.1624524456.0; did=web_e57bcbe66b44b3303072c3ca86e18ab7; app_id=ks670191923238046957; expire_time=1800; kuaishou.ad.creator_access_token=842326732783833; access_token=ChFvYXV0aC5hY2Nlc3NUb2tlbhIwrZjJCFM_LFmmuXNDtC-isnqy7wxsH1q0as7AznPEWZqKrHx_tK9zHd4csFUCEdDsGhLd637ev4BKL7l6Qm3dUiG-wociINK4isAtfP5Uq1kyT1QVB3sJPHKao1YzNq7lA7oALi9hKAUwAQ; nc_user_id=CiVhZC5ub3RpZnkuY2VudGVyLm9hdXRoLnVzZXIuaWQuc2VjcmV0EiCXKPMJEVDSeHzPGXGGsaE54IknHbj8JYr9hXmn5SBVrxoSA3Rx5eVHOBRKJYA5YdE3e5KqIiChDgGLu/x6ZAlDESSfgygLkSrHFZQLydQYdyiSZYBxACgFMAE=; userId=2233763636; accessproxy_session=eaa21ca2-5b0c-44ce-b8dd-b20a2954419c; adEcomOpToken=eyJ1aWQiOiJsaWxpbmcwOSIsImxvZ2luVGltZSI6MTYyODg0Mjg3MDkyOSwiY25OYW1lIjoi5p2O546yIiwidG9rZW5OYW1lIjoiYWRFY29tT3BUb2tlbiIsImVtYWlsIjoibGlsaW5nMDlAa3VhaXNob3UuY29tIn0=' },
        }
    }
}