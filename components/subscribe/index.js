// valid and false need to be removed/refactored after API implementation
// TODO Make Server -> Client work
import PropTypes from 'prop-types';
import VisuallyHidden from '@chakra-ui/visually-hidden';
import { Button } from '@chakra-ui/button';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { Box, Heading, Text } from '@chakra-ui/layout';
import { useColorModeSwitcher } from '../../utils/hooks/useColorModeSwitcher';
import { useMediaQuery } from "@chakra-ui/react"
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { useRef, useState } from 'react';
import { ErrorMessage, SuccessMessage } from '../styled';

const Subscribe = ({ valid, invalid, loading, ...props }) => {
  const { themed, colorGrey, errorColor } = useColorModeSwitcher();
  const isMobile = useMediaQuery("(min-width: 480px)")
  const [form, setForm] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setForm({ state: 'loading' });

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputRef.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();
    if (error) {
      setForm({
        state: 'error',
        message: error
      });
      inputRef.current.value = '';
      return;
    }

    inputRef.current.value = '';
    setForm({
      state: 'success',
      message: `Congrats! You're on the mailing list.`
    });
  };

  return (
    <Box
      border="2px solid"
      borderColor={isMobile ? "transparent" : colorGrey}
      py="2rem"
      px="1rem"
      minW="360px"
      maxW="100rem"
    >
      <Heading variant="h3" pb="0.2rem">Subscribe to my newsletter</Heading>
      <Text mb="1rem">Let's chat about code, life and design!</Text>
      <form onSubmit={handleSubmit}>
        <FormControl id="email">
          <FormLabel>
            <VisuallyHidden>Enter your email</VisuallyHidden>
          </FormLabel>
          <InputGroup mb="1rem" borderColor={themed}>
            <Input
              {...props}
              ref={inputRef}
              errorBorderColor={errorColor}
              isRequired
              type="email"
              autoComplete="email"
              borderRadius="sm"
              placeholder="jim@me.com"
            />
            <InputRightElement minW="7rem">
              {form.state === 'loading' || (loading && true) ? (
                <Button
                  w="100%"
                  isLoading
                  variant="secondaryThemed"
                  _hover={{ variant: 'secondaryThemed' }}
                />
              ) : (
                <Button w="100%" variant="secondaryThemed" type="submit">
                  Subscribe
                </Button>
              )}
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </form>
      {form.state === 'success' && (
        <SuccessMessage>
          {form.message || `Congrats! You're on the mailing list.`}
        </SuccessMessage>
      )}
      {form.state === 'error' && (
        <ErrorMessage>
          {form.message || `You've already subscribed!`}
        </ErrorMessage>
      )}
      {valid && (
        <SuccessMessage>Congrats! You're on the mailing list.</SuccessMessage>
      )}
      {invalid && <ErrorMessage>You've already subscribed!</ErrorMessage>}
    </Box>
  );
};

Subscribe.propTypes = {
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  loading: PropTypes.bool
};

Subscribe.defaultProps = {
  valid: false,
  invalid: false,
  loading: false
};

export { Subscribe };
