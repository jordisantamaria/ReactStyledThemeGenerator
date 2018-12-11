import Box, { IBox } from "../basic/Box";

interface IProps extends IBox{
  setActiveTab?: () => void;
  isActiveTab?: boolean;
}
const Tab = (props: IProps) => {
  return (
    <Box
      width={1/2}
      onClick={props.setActiveTab}
      bg={props.isActiveTab ? 'primaryLightest' : ''}
      color={props.isActiveTab ? 'black' : 'black2'}
      p={1}
      css={{textAlign: 'center'}}
    >
      {props.children}
    </Box>
  );
}

export default Tab;