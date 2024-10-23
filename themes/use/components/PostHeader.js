import { HashTag } from '@/components/HeroIcons'
import LazyImage from '@/components/LazyImage'
import NotionIcon from '@/components/NotionIcon'
import WordCount from '@/components/WordCount'
import { siteConfig } from '@/lib/config'
import { formatDateFmt } from '@/lib/utils/formatDate'
import Link from 'next/link'
import WavesArea from './WavesArea'
import TagItemMini from './TagItemMini'

/**
 * 文章页头
 * @param {*} param0
 * @returns
 */
export default function PostHeader({ post, siteInfo, isDarkMode }) {
  if (!post) {
    return <></>
  }
  // 文章头图
  const headerImage = post?.pageCover ? post.pageCover : siteInfo?.pageCover
  const ANALYTICS_BUSUANZI_ENABLE = siteConfig('ANALYTICS_BUSUANZI_ENABLE')
  return (
    <div
      id='post-bg'
      className='md:mb-0 -mb-5 w-full h-[30rem] relative md:flex-shrink-0 overflow-hidden bg-cover bg-center bg-no-repeat z-10'>
      <style jsx>{`
        .coverdiv:after {
          position: absolute;
          content: '';
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          box-shadow: 110px -130px 500px 100px ${isDarkMode
              ? '#efc8c1'
              : '#efc8c1'} inset;
        }
      `}</style>

      <div
        className={`${isDarkMode ? 'bg-[#efc8c1]' : 'bg-[#efc8c1]'} absolute top-0 w-full h-full py-10 flex justify-center items-center`}>
        {/* 文章背景图 */}
        <div
          id='post-cover-wrapper'
          style={{
            filter: 'blur(15px)'
          }}
          className='coverdiv lg:opacity-50 lg:translate-x-96 lg:rotate-12'>
          <LazyImage
            id='post-cover'
            className='w-full h-full object-cover max-h-[50rem] min-w-[50vw] min-h-[20rem]'
            src={headerImage}
          />
        </div>

        {/* 文章文字描述 */}
        <div
          id='post-info'
          className='absolute top-30 z-10 flex flex-col space-y-4 md:top-40 lg:top-48 lg:-mt-12 w-full max-w-[86rem] px-5'>
          {/* 分类 */}
          <div className='flex justify-center md:justify-start items-center gap-4'>
            {post.category && (
              <>
                <Link
                  href={`/category/${post.category}`}
                  className='mr-4'
                  passHref
                  legacyBehavior>
                  <div className='cursor-pointer font-sm font-bold px-3 py-1 rounded-lg  hover:bg-white text-white bg-indigo-600 dark:bg-indigo-500 hover:text-blue-600 duration-200 '>
                    {post.category}
                  </div>
                </Link>
              </>
            )}

            {/* {post.tagItems && (
              <div className='hidden md:flex justify-center flex-nowrap overflow-x-auto'>
                {post.tagItems.map((tag, index) => (
                  <Link
                    key={index}
                    href={`/tag/${encodeURIComponent(tag.name)}`}
                    passHref
                    className={
                      'cursor-pointer inline-block text-indigo-700 font-bold hover:text-white duration-200 py-0.5 px-1 whitespace-nowrap '
                    }>
                    <div className='flex items-center'>
                      <HashTag className='text-white stroke-2 mr-0.5 w-3 h-3' />{' '}
                      {tag.name + (tag.count ? `(${tag.count})` : '')}{' '}
                    </div>
                  </Link>
                ))}
              </div>
            )} */}
          </div>

          {/* 文章Title */}
          <div className='max-w-5xl font-bold text-3xl lg:text-5xl md:leading-snug shadow-text-md flex  justify-center md:justify-start text-white'>
            {siteConfig('POST_TITLE_ICON') && (
              <NotionIcon icon={post.pageIcon} />
            )}
            {post.title}
          </div>

          {/* 标题底部补充信息 */}
          <section className='flex-wrap text-black text-opacity-70 shadow-text-md flex text-sm  justify-center md:justify-start mt-4 text-white font-light leading-8'>
            <div className='flex flex-col justify-center '>
              {/* <div className='mr-2'>
                <WordCount />
              </div> */}

              <div className='pl-1 mr-2'>
               <i className='fa-solid fa-user mr-0.5'></i>{' '}
               {post.writer}
              </div> 
              
              <div className='flex-col flex md:flex-row'>

                {post?.type !== 'Page' && (
                  <>
                    <Link
                      href={`/archive#${formatDateFmt(post?.publishDate, 'yyyy-MM')}`}
                      passHref
                      className='pl-1 mr-2 cursor-pointer hover:underline'>
                      <i className='fa-regular fa-calendar mr-0.5'></i>{' '}
                      {post?.publishDay}
                    </Link>
                  </>
                )}

                <div className='pl-1 mr-2'>
                  <i className='fa-regular fa-calendar-check mr-0.5'></i>{' '}
                  {post.lastEditedDay}
                </div>

                {/* 阅读统计 */}
                {ANALYTICS_BUSUANZI_ENABLE && (
                  <div className='busuanzi_container_page_pv font-light pl-1 mr-2'>
                    <i className='fa-solid fa-fire-flame-curved mr-0.5'></i>{' '}
                    <span className='mr-2 busuanzi_value_page_pv' />
                  </div>
                )}

              </div>
            </div>

           
          </section>

          {/* mini tag*/}
          <div className='mt-4 mb-1'>
            {post.tagItems && (
              <div className='flex  justify-center flex-nowrap overflow-x-auto md:justify-start'>
                {post.tagItems.map(tag => (
                  <TagItemMini key={tag.name} tag={tag} />
                ))}
              </div>
            )}
          </div>

        </div>

        <WavesArea />
      </div>
    </div>
  )
}
