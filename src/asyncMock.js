

const products = [
    { 
        id: '1', 
        name: 'uno', 
        price: 1000, 
        category: 'celular', 
        img: "https://scontent.ffdo4-1.fna.fbcdn.net/v/t39.30808-6/309856034_651923009802795_36610398123014707_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEHy_P6byTq3f9LICAfK-zdLLeD6qRs_ZYst4PqpGz9lo_2s6EkIPYWLO7a0L0_6XDNMprQmW5VV1S-27e4EO1C&_nc_ohc=q9tq2NReZx0AX8nkK4Z&_nc_ht=scontent.ffdo4-1.fna&oh=00_AfA7ZWzzHNx2OiIavvtDUMTroMO2EzZ9AzRcpL7dnhHyxA&oe=6418CC9A", 
        stock: 25, 
        description:'Descripcion de Iphone 12'
    },
    { 
        id: '2',
        name: 'samsung s21', 
        price: 800, 
        category: 'celular', 
        img:'https://scontent.ffdo4-1.fna.fbcdn.net/v/t39.30808-6/312146785_651927163135713_5429584639187541813_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEfPHon1Q5h_lzapDzL6G2ZyJrCJOqh7ojImsIk6qHuiN40jALVO8uGRQ5hndNA_XBpdk8Qn7PzLEmD1XUkhVA4&_nc_ohc=QULSqLH5dRgAX8N4WdV&_nc_ht=scontent.ffdo4-1.fna&oh=00_AfAz7Not3vpDlVp4Pl57bZc843aP3lDSx8jNDqWe3m2hUg&oe=64195FDD', 
        stock: 16, 
        description:'Descripcion de Samsung s21'
    },
    { 
        id: '3', 
        name: 'Ipad 8va generacion', 
        price: 1200, 
        category: 'tablet', 
        img:'https://scontent.ffdo4-1.fna.fbcdn.net/v/t39.30808-6/306653133_620459652949131_5911528893831355887_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGRPXxhBuuPrfdRJ9LonrgFP1kVP76t8tE_WRU_vq3y0eVGe8mu-wuZsLSOQKIBIfdYmrDjKu4zIqA29cxbYoOV&_nc_ohc=0pStjp2ONdIAX83NCfM&_nc_ht=scontent.ffdo4-1.fna&oh=00_AfCBOUKgr0UibPUZTjBjdIqVavm9zxYI6thCczC3eykTRw&oe=6417F756', 
        stock: 10, 
        description:'Descripcion de Ipad'
    },
    { 
        id: '4',
        name: 'samsung s21', 
        price: 800, 
        category: 'celular', 
        img:'https://scontent.ffdo4-1.fna.fbcdn.net/v/t39.30808-6/300680909_1775639756107957_973987071229689599_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeGLKQ-J2ZaIjE7A6p_zsDL6b7UTbLFroYZvtRNssWuhhhE3fVux4kXx2sLBuu5Yrbbwt9Gc3DVPnEp5NiJ_Jo1G&_nc_ohc=_QeU4WyrbY8AX_g3VuL&_nc_ht=scontent.ffdo4-1.fna&oh=00_AfCg_S6qXYD7jYo_lbs2BGaQ2-A0i-gUIShjYo1OcE50xg&oe=64199B9D', 
        stock: 16, 
        description:'Descripcion de Samsung s21'
    },
    { 
        id: '5', 
        name: 'Ipad 8va generacion', 
        price: 1200, 
        category: 'tablet', 
        img:'https://scontent.ffdo4-1.fna.fbcdn.net/v/t39.30808-6/300771089_1775634252775174_1680518355247131736_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeEoxwaFqMisWE427twxR8rCaBvL43IiMjxoG8vjciIyPDoeYeRzHXRZ7lmPeEMiiwnwjUFUwNiieuqQEEDCOkA9&_nc_ohc=psYJPXNmRVMAX98brp_&_nc_ht=scontent.ffdo4-1.fna&oh=00_AfC95xfyswC7TxMcD1zSw8Oui6HxgZMzF4ND0vlVdifx1Q&oe=64196B57', 
        stock: 10, 
        description:'Descripcion de Ipad'
    },
    { 
        id: '6',
        name: 'samsung s21', 
        price: 800, 
        category: 'celular', 
        img:'https://scontent.ffdo4-1.fna.fbcdn.net/v/t39.30808-6/301277722_1775635929441673_1737571261694989152_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeE2DGBJDxHMoe3M77eSZ6kgJFVhR0i2ygAkVWFHSLbKAAwQ9fWcahYlyxVbobw5wHtXvGUDwngUEQbIuQ8PHj7Q&_nc_ohc=eh2I2JvPd5kAX_14Whd&_nc_ht=scontent.ffdo4-1.fna&oh=00_AfDQsHuVc-jndZok_L2xAYGtz_f-cN4sBV2EM3ftdLk9zQ&oe=641806B6', 
        stock: 16, 
        description:'Descripcion de Samsung s21'
    },
    { 
        id: '7', 
        name: 'Ipad 8va generacion', 
        price: 1200, 
        category: 'tablet', 
        img:'https://scontent.ffdo4-1.fna.fbcdn.net/v/t39.30808-6/297264416_1760954274243172_3244777110369947660_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeFZfTdsew3LUNR15H6KBwLwfFDiutA0QwN8UOK60DRDA-V3LlDvTgtfW_fYDG_63mh3FfYlbaNfEmplJySMzYy2&_nc_ohc=J6gnfbXbjNoAX9UCLpV&_nc_ht=scontent.ffdo4-1.fna&oh=00_AfAPaIr3LrWj6Cj6OpOcQvz4cF9p3A3RrDx4i603Z9HC_Q&oe=641843C4', 
        stock: 10, 
        description:'Descripcion de Ipad'
    },
    { 
        id: '8',
        name: 'samsung s21', 
        price: 800, 
        category: 'celular', 
        img:'https://scontent.ffdo4-1.fna.fbcdn.net/v/t39.30808-6/294533440_1751316368540296_647418471902867067_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeHus5HM8vtcjDUkbaxhm9xnILpFxVEnOnEgukXFUSc6cQg9C2PtTW4CX5qtQpkXGfcliYbOQ35azzhsEeos7d5j&_nc_ohc=Uh06NN32SdUAX9Ahebs&_nc_ht=scontent.ffdo4-1.fna&oh=00_AfCKVXWjea7pFqMsItdNdQmJVpqPp8-ZlaBO_YAXH4Z-tg&oe=6417E422', 
        stock: 16, 
        description:'Descripcion de Samsung s21'
    },
    { 
        id: '9', 
        name: 'Ipad 8va generacion', 
        price: 1200, 
        category: 'tablet', 
        img:'https://scontent.ffdo4-1.fna.fbcdn.net/v/t39.30808-6/294482155_1751317065206893_6081094711288261360_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeGHExd1-OmLOnHl_WocY1yE8hJ0tDDQ_gPyEnS0MND-A2inzUKqtcKdM8VBeXDl2Xt_QXmqXdhN9GwvrrROZywO&_nc_ohc=hiQVkl-Qx84AX8Z_mum&_nc_ht=scontent.ffdo4-1.fna&oh=00_AfDohTO4YgehfXsbL1gCNESFM1RgnUwmAiagJ69JKdFCrw&oe=6417FFCA', 
        stock: 10, 
        description:'Descripcion de Ipad'
    }
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(products);
        }, 2000);
    });
}