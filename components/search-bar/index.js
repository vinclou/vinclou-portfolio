import React from 'react';
import {
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  IconButton
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useColorModeSwitcher } from '../../hooks/useColorModeSwitcher';
// import { client } from "../../utils/api-client";

const delay = (fn, ms, ...args) => setTimeout(fn, ms, ...args);

function SearchBar() {
  const { authThemed } = useColorModeSwitcher();
  // const {data, error, run, isLoading, isError, isSuccess} = useAsync()
  const [query, setQuery] = React.useState();
  const [queried, setQueried] = React.useState(false);

  React.useEffect(() => {
    console.log(queried);
    if (!queried) {
      return;
    }
    // run(client(`books?query=${encodeURIComponent(query)}`));
  }, [query, queried]); // run

  function handleSearchSubmit(event) {
    event.preventDefault();
    setQueried(true);
    setQuery(event.target.value);
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting...');
    // e.target.reset();
  };

  const handleFieldChange = async (event) => {
    event.preventDefault();
    setQuery(event.target.value);
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <InputGroup size="md" w={{ base: '20rem', lg: '30rem' }}>
        <Input
          borderRadius="none"
          placeholder="search"
          type="text"
          onChange={handleFieldChange}
        />
        {errors.search && (
          <Text color="red" variant="small">
            {errors.search.message}
          </Text>
        )}
        <InputRightElement>
          <IconButton
            aria-label="search"
            border="none"
            variant="unstyled"
            type="submit"
            isLoading={isSubmitting}
            icon={<SearchIcon />}
            // color={authThemed}
            // borderRadius="none"
            // variant="ghost"
          />
        </InputRightElement>
      </InputGroup>
    </form>
  );
}

export { SearchBar };
