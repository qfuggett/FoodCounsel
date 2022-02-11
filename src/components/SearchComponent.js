import React from 'react-native';
import { Searchbar } from 'react-native-paper';

const SearchComponent = () => {

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
        />
    )
}

export default SearchComponent;