const skin = {}

skin.iceBlue = {
  // 全局字体颜色
  appColor: '#FFFFFF',
  appBgColor: 'black',

  // header
  headerBgColor: '#010a1c',

  // left menu
  leftMenuBgColor: '#2c3e50',
  leftMenuBorderColor: '#2c3e50',
  leftMenuShadowColor: 'black',

  // right menu
  rightMenuBgColor: '#2c3e50',
  rightMenuBorderColor: '#2c3e50',
  rightMenuShadowColor: 'black',

  // content
  contentBgColor: '#2c3e50',

  // footer
  footerBgColor: '#2c3e50',
  footerShadowColor: 'black',
}

skin.lightBlue = {
  // 全局字体颜色
  appColor: 'black',
  appBgColor: 'white',

  // header
  headerBgColor: 'blue',

  // footer
  footerBgColor: 'blue',
  footerShadowColor: 'black',

  // left menu
  leftMenuBgColor: 'blue',
  leftMenuBorderColor: '#2c3e50',
  leftMenuShadowColor: 'black',

  // right menu
  rightMenuBgColor: 'blue',
  rightMenuBorderColor: '#2c3e50',
  rightMenuShadowColor: 'black',

  // content
  contentBgColor: 'blue',
}

let getSkinStyle = (skin) => {
  if(!skin) {
    return '';
  }
  return `
    .skin-app {
      color: ${skin.appColor};
      background-color: ${skin.appColor};
    }
    .skin-header {
      background-color: ${skin.headerBgColor};
    }
    .skin-left-menu {
      background-color: ${skin.leftMenuBgColor};
      border-right: 1px solid ${skin.leftMenuBorderColor};
      box-shadow: 0 2px 10px ${skin.leftMenuShadowColor};
    }
    .skin-right-menu {
      background-color: ${skin.rightMenuBgColor};
      border-right: 1px solid ${skin.rightMenuBorderColor};
      box-shadow: 0 2px 10px ${skin.rightMenuShadowColor};
    }
    .skin-content {
      background-color: ${skin.contentBgColor};
    }
    .skin-footer {
      background-color: ${skin.footerBgColor};
      box-shadow: 0 -1px 10px ${skin.footerShadowColor};
    }
  `;
}

let setSkinStyle = (skin) => {
  let styleText = getSkinStyle(skin);
  let oldStyle = document.getElementById('skin');
  const style = document.createElement('style');
  style.id = 'skin';
  style.type = 'text/css';
  style.innerHTML = styleText;
  oldStyle ? document.head.replaceChild(style, oldStyle) : document.head.appendChild(style);
}

setSkinStyle(skin.iceBlue)

export {skin, setSkinStyle}
