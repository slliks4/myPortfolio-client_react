// Api Import
import getProfile from '../../api/GET/getProfile';

// Hooks Import
import useQueryGet from '../../hooks/useQueryGet';

// Layout Import
import DataLayout1 from '../../layouts/__DataLayout1/DataLayout1';
import DataLayout1Error from '../../layouts/__DataLayout1/DataLayout1Error';
import DataLayout1Loading from '../../layouts/__DataLayout1/DataLayout1Loading';

// Providers Import
import BoxThemeProvider from '../../providers/BoxThemeProvider';

// Default Function
export default function HomeProfile() {
    const query_key = "profile";
    const params = { username: 'slliks4' };

    // Fetch Profile by username
    const { data:profile, isLoading, error } = useQueryGet({ 
        query_key:query_key, 
        query_func:getProfile, 
        params:params 
    });

    return (
        <BoxThemeProvider
            children={
                <div className='home-profile h-fit w-full'>
                    { isLoading && (
                        <DataLayout1Loading />
                    )}
                    { error && (
                        <DataLayout1Error message={"Failed to resolve"} />
                    )}
                    { profile ? (
                        <DataLayout1
                            image={profile.data.pic}
                            isFetched={true}
                            title="fullstack developer"
                            heading={`${profile.data.first_name} ${profile.data.last_name}`}
                            text={profile.data.home_text}
                            path="/about/profile"
                        />
                    ) : null} 
                </div>
            } 
        />
    );
}
