export default {
    pages: [
        'pages/index/index',
        'pages/edit/index',
        'pages/detail/index',
        'pages/mine/index'
    ],
    window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
    },
    tabBar: {
        selectedColor: '#495060',
        color: '#888',
        list: [
            {
                pagePath: 'pages/index/index',
                text: '้ฆ้กต',
                iconPath: 'assets/tab_home.png',
                selectedIconPath: 'assets/tab_home_active.png'
            },
            {
                pagePath: 'pages/mine/index',
                text: 'ๆ็',
                iconPath: 'assets/tab_my.png',
                selectedIconPath: 'assets/tab_my_active.png'
            }
        ]
    }
}
