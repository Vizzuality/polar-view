import Button from 'components/button';

const Menu = () => (
  <div className="flex z-50">
    <Button className="border-r-0 mr-0.5 text-tiny px-4" theme="primary" cut="left-top" href="/">
      HOMEPAGE
    </Button>
    <Button className="border-l-0 px-4" theme="primary" cut="right-bottom" href="/about">
      ABOUT
    </Button>
  </div>
);

export default Menu;