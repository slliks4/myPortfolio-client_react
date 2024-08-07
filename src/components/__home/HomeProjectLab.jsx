// Api Import
import getProjects from '../../api/GET/getProjects';

// Providers Import
import BoxThemeProvider from '../../providers/BoxThemeProvider';

// Components Import
import HomeSlideShow from './HomeSlideShow';

// Default Function
export default function HomeProjectLab() {
  return (
    <BoxThemeProvider
      className={'my-4'}
      children={ 
        <div className='w-full h-fit'>
          <HomeSlideShow
            title={'project lab'}
            heading={'explore more'}
            path={'/project/lab'}
            imgPath={'/project'}
            query_key={'homeProjectLab'}
            query_func={getProjects}
            params={{ limit: 6, isLab: 'true' }}
          />
        </div>
      }
    />
  )
}
