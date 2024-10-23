/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return <style jsx global>{`
    
  // 底色
  .dark body{
      background-color: black;
  }
  // 文本不可选取
    .forbid-copy {
        user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }
  
  #theme-simple #announcement-content {
    /* background-color: #f6f6f6; */
  }
  
  #theme-simple .blog-item-title {
    color: #df9283;
  }
  
  .dark #theme-simple .blog-item-title {
    color: #d1d5db;
  }
  
  .notion {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  
  
  /*  菜单下划线动画 */
  // #theme-simple .menu-link {
  //     text-decoration: none;
  //     background-image: linear-gradient(#dd3333, #dd3333);
  //     background-repeat: no-repeat;
  //     background-position: bottom center;
  //     background-size: 0 2px;
  //     transition: background-size 100ms ease-in-out;
  }
   
  #theme-simple .menu-link:hover {
      background-size: 100% 2px;
      color: #e7ada2;
      cursor: pointer;
  }
  
  // 新增加的css by arale

  // *******首页&全局*******
  header {
  display:none;
  }

  .hover\:underline:hover {
  text-decoration-line: none;
  color:#df9283;
  font-weight: 400;
  }

  .hover\:text-red-600:hover,
  .hover\:text-red-400:hover,
  .hover\:border-red-300:hover {
  color:#e7ada2;
  }

.text-gray-700 {
color:#424242;
}

#nav-bar-inner {
    width: 90%;
    max-width: 1280px;
    margin: auto;
}

#nav-menu-pc > div > a,
#nav-menu-pc > div> div {
color:#424242;
font-size:16px;
font-weight:350;
white-space: nowrap;
}

#nav-menu-pc > div > a:hover,
#nav-menu-pc > div> div:hover {
color:#df9283;
}


#nav-menu-pc > div > ul .text-blue-600 {
color:#424242;
}

#nav-menu-pc > div > ul .text-blue-600:hover {
color:#df9283;
}

#menu-wrap > div > a > span,
#menu-wrap > div > div > span,
#menu-wrap > div > div > a {
color:#424242;
}


#menu-wrap > div > a > span:hover,
#menu-wrap > div > div > span:hover,
#menu-wrap > div > div > a:hover {
color:#df9283;
}

#nav-menu-pc > div  > div,
#nav-menu-pc > div > a {
padding:0 1rem;
display:flex;
align-items: center;
}

#nav-menu-pc {
display: flex;
    align-items: center;
}

#nav-menu-pc > div > div > span > i,
#nav-menu-pc > div > a > span > i {
font-size:22px;
}
  
  *, ::before, ::after  {
    border-color:transparent;
}

a:hover {
font-weight:400;
}

#container-inner\  > div > div > div.pt-2.border.pl-4.py-2.my-4.dark\:text-gray-300 {
    border-color:transparent;
}

#container-wrapper {
    width: 90%;
    max-width: 1280px;
    margin: auto;
}

#posts-wrapper > div > div > div.block > a {
color:#df9283;
}

#posts-wrapper > div > div > div.block > a:hover {
background-color:#df9283;
border-radius:5px;
color:#fff;
border: none;
}

  // .hover\:border-red-300 {
  // border-color:#efc8c1;
  // }

#theme-simple > div.fixed.right-4.bottom-4.z-20 > div {
border-radius: 40px;
background-color:#df9283;
}

#theme-simple > div.fixed.right-4.bottom-4.z-20 > div:hover{
color:#e7ada2;
}

#container.building.visible {
display:none;
}

#nav-bar-inner > div.absolute.right-12.h-full.text-center.px-2.flex.items-center.text-blue-400.cursor-pointer > i {
color:#df9283;
}



// *********post*********

.text-red-600 {
color:#df9283;
}

// #right-sidebar > div:nth-child(1) > div.overflow-y-auto.overscroll-none.max-h-36.lg\:max-h-96.scroll-hidden > nav > a:nth-child(1):hover {
// color:#df9283;
// }

.border-red-700 {
color:#df9283;
}

.notion-bookmark:hover,
.hover\:border-indigo-500:hover,
.hover\:border-indigo-500:hover{
border-color:#df9283;
}

.border-red-700 {
border-color:#df9283;
}

#container-inner\  > div > div > section.text-gray-800.dark\:text-gray-400.h-12.flex.items-center.justify-between.space-x-5.my-4 a  {
padding:5px;
}

#container-inner\  > div > div > section.text-gray-800.dark\:text-gray-400.h-12.flex.items-center.justify-between.space-x-5.my-4 a:hover  {
color:#fff;
background-color:#df9283;
border-radius:5px;
text-decrotation:none;
}

@media screen and (max-width:719px) {
#nav-menu-pc {
display:none;}
}

#nav-bar-inner,
#container-wrapper {
    width: 100%;
}

  `}</style>
}

export { Style }
