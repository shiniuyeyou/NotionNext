import { useGlobal } from '@/lib/global'
import { useEffect, useState } from 'react'
/**
 * @see https://css-loaders.com/
 * @returns 加载动画
 */
export default function LoadingCover() {
  const { onLoading, setOnLoading } = useGlobal()
  const [isVisible, setIsVisible] = useState(false) // 初始状态设置为false，避免服务端渲染与客户端渲染不一致

  useEffect(() => {
    // 确保在客户端渲染时才设置可见性
    if (onLoading) {
      setIsVisible(true)
    } else {
      const timeout = setTimeout(() => setIsVisible(false), 1500) // 等待淡出动画结束
      return () => clearTimeout(timeout)
    }
  }, [onLoading])

  const handleClick = () => {
    setOnLoading(false) // 强行关闭 LoadingCover
  }

  if (typeof window === 'undefined') {
    return null // 避免在服务端渲染时渲染出这个组件
  }

  return isVisible ? (
    <div
      id='loading-cover'
      onClick={handleClick}
      className={`dark:text-white text-black bg-white dark:bg-black animate__animated animate__faster ${
        onLoading ? 'animate__fadeIn' : 'animate__fadeOut'
      } flex flex-col justify-center z-50 w-full h-screen fixed top-0 left-0`}>
      <div className='mx-auto'>
        <style global>
          {`
      // .loader {
      //   width: 20px;
      //   aspect-ratio: 1;
      //   border-radius: 50%;
      //   background: #df9283;
      //   box-shadow: 0 0 0 0 #efc8c1;
      //   animation: l2 1.5s infinite linear;
      //   position: relative;
      // }
      // .loader:before,
      // .loader:after {
      //   content: '';
      //   position: absolute;
      //   inset: 0;
      //   border-radius: inherit;
      //   box-shadow: 0 0 0 0 #efc8c1;
      //   animation: inherit;
      //   animation-delay: -0.5s;
      // }
      // .loader:after {
      //   animation-delay: -1s;
      // }
      // @keyframes l2 {
      //   100% {
      //     box-shadow: 0 0 0 40px #f7e4e0;
      //   }
      // }

        .loader,
        .loader:before,
        .loader:after {
          border-radius: 50%;
          width: 2.5em;
          height: 2.5em;
          animation-fill-mode: both;
          animation: loadAnimation 1.8s infinite ease-in-out;
        }

        .loader {
          color: #e7d1b0;
          font-size: 10px;
          margin: 80px auto;
          position: relative;
          text-indent: -9999em;
          transform: translateZ(0);
          animation-delay: -0.16s;
          top: 0;
          transform: translate(-50%, 0);
        }

        .loader:before,
        .loader:after {
          content: "";
          position: absolute;
          top: 0;
        }

        .loader:before {
          color: #b7d3c5;
          left: -3.5em;
          animation-delay: -0.32s;
        }

        .loader:after {
          color: #df9283;
          left: 3.5em;
        }

        @keyframes loadAnimation {
          0%,
          80%,
          100% {
            box-shadow: 0 2.5em 0 -1.3em;
          }

          40% {
            box-shadow: 0 2.5em 0 0;
          }
        }



      `}
        </style>
        <div className='loader'></div>
      </div>
    </div>
  ) : null
}
