// React Router Dom
import { Link } from 'react-router-dom';

// Config Import
import { baseUrl } from '../../config/env';

// Components Import
import LinkBtn from '../../components/LinkBtn';

// Default Function
export default function DataLayout1({ title, heading, text, image, path, isFetched=false, imgPath="" }) {
  return (
    <>
      { isFetched && image ? (
        <Link to={imgPath} className='w-full h-[calc(100vh-80vh)] overflow-hidden block rounded-md '>
          <img src={`${baseUrl}${ image }`} alt={title} className='object-cover object-top w-full h-full' />
        </Link>
      ):(
        <>
          { !isFetched && image ? (
            <img src={image} alt={title ? title : ''} className='object-cover object-center rounded-md w-full h-[calc(100vh-80vh)]' />
          ):
            (
              null
            )
          }
        </>
      )}
      <div className='pt-4 w-[calc(100%-10%)]'>
        { title ? (
          <small> 
            <p className='text-lg text-primary font-semibold capitalize py-2'>{ title }</p>
          </small>
        ) : null}
        { heading ? <h3 className='text-md capitalize'>{ heading }</h3> : null }
        { text ? <p className='text-md'>{ text }</p> : null } 
      </div>
      { path ? <LinkBtn path={path} /> : null }
    </>
  )
}
