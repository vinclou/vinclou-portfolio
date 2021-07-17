//TODO: define dark/light mode colors
export const styles = {
  global: (props) => ({
    body: {
      overflowX: 'hidden',
      initialColorMode: 'dark',
      bg: props.colorMode === 'light' ? 'default.light' : '#171010',
      color: props.colorMode === 'light' ? '#171010' : 'default.light'
    }
  })
};
