import { HashTag } from '@/components/HeroIcons'
import Link from 'next/link'

// const TagItemMini = ({ tag, selected = false }) => {
//   return (
//     <Link
//       key={tag}
//       href={selected ? '/' : `/tag/${encodeURIComponent(tag.name)}`}
//       passHref
//       className={
//         'cursor-pointer inline-block hover:text-white hover:bg-indigo-600 dark:hover:bg-indigo-600 px-2 py-1 rounded-2xl dark:text-white duration-200 text-sm whitespace-nowrap '
//       }>
//       <div className='font-light flex items-center'>
//         <HashTag className='stroke-2 mr-0.5 w-3 h-3' />{' '}
//         {tag.name + (tag.count ? `(${tag.count})` : '')}{' '}
//       </div>
//     </Link>
//   )
// }



const TagItemMini = ({ tag, selected = false }) => {
  return (
    <Link
      key={tag}
      href={selected ? '/' : `/tag/${encodeURIComponent(tag.name)}`}
      passHref
      className={`cursor-pointer inline-block rounded hover:bg-indigo-400 dark:hover:text-white  hover:text-white duration-200
        mr-2 py-0.5 px-1 text-xs whitespace-nowrap 
         ${selected
        ? 'text-white dark:text-gray-300 bg-black dark:bg-black dark:hover:bg-indigo-900'
        : `text-gray-600 hover:shadow-xl dark:border-gray-400 notion-${tag.color}_background `}` }>

      <div className='font-light'>{selected && <i className='mr-1 fa-tag'/>} {tag.name + (tag.count ? `(${tag.count})` : '')} </div>

    </Link>
  );
}

export default TagItemMini
