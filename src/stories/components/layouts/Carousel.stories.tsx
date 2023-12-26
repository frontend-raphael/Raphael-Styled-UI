import { Button, Carousel, IconImage, Image } from "@/components";
import { commonComponentPropsDescription } from "@/resources";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Carousel,
  title: "components/layouts/Carousel",
  tags: ["autodocs"],
  argTypes: {
    className: { description: commonComponentPropsDescription.className },
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof Carousel>;

const DefaultCarousel = {
  render: () => {
    const itemList = [
      "https://picsum.photos/id/1/300/300",
      "https://picsum.photos/id/5/300/300",
      "https://picsum.photos/id/7/300/300",
    ];
    return (
      <Carousel
        itemCount={3}
        width="300px"
        height="300px"
        isControlVisible={true}
        isIndicatorVisible={true}
        isAuto={true}
      >
        {itemList.map((value, index) => (
          <Carousel.Item key={value} itemIdx={index}>
            <Image src={value} />
          </Carousel.Item>
        ))}
        <Carousel.Indicator>
          {itemList.map((value, index) => (
            <Carousel.IndicatorItem key={value} itemIdx={index}>
              <Button buttonLabel={`${index}`} />
            </Carousel.IndicatorItem>
          ))}
        </Carousel.Indicator>
        <Carousel.LeftControl>
          <IconImage src="https://www.svgrepo.com/show/533620/arrow-sm-left.svg" />
        </Carousel.LeftControl>
        <Carousel.RightControl>
          <IconImage src="https://www.svgrepo.com/show/533621/arrow-sm-right.svg" />
        </Carousel.RightControl>
      </Carousel>
    );
  },
} satisfies Story;

const InfiniteCarousel = {
  render: () => {
    const itemList = [
      "https://picsum.photos/id/1/300/300",
      "https://picsum.photos/id/5/300/300",
      "https://picsum.photos/id/7/300/300",
    ];
    return (
      <Carousel
        itemCount={3}
        width="300px"
        height="300px"
        // isAuto={true}
        isInfinite={true}
        isControlVisible={true}
        isIndicatorVisible={true}
      >
        {itemList.map((value, index) => (
          <Carousel.Item key={value} itemIdx={index}>
            <Image src={value} />
          </Carousel.Item>
        ))}
        <Carousel.Indicator>
          {itemList.map((value, index) => (
            <Carousel.IndicatorItem key={value} itemIdx={index}>
              <Button buttonLabel={`${index}`} />
            </Carousel.IndicatorItem>
          ))}
        </Carousel.Indicator>
        <Carousel.LeftControl>
          <IconImage src="https://www.svgrepo.com/show/533620/arrow-sm-left.svg" />
        </Carousel.LeftControl>
        <Carousel.RightControl>
          <IconImage src="https://www.svgrepo.com/show/533621/arrow-sm-right.svg" />
        </Carousel.RightControl>
      </Carousel>
    );
  },
} satisfies Story;

export { DefaultCarousel, InfiniteCarousel };
