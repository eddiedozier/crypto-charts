import React, { forwardRef } from "react";
import * as RadixSelect from "@radix-ui/react-select";
import {
  SelectContent,
  SelectIcon,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTrigger,
  SelectViewport,
  StyledItem,
} from "./style";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Flex from "components/Flex";

const SelectItem = forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<RadixSelect.SelectItemProps>
>(({ children, ...props }, forwardedRef) => {
  return (
    <StyledItem {...props} ref={forwardedRef}>
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
    </StyledItem>
  );
});

SelectItem.displayName = "SelectItem";

export type SelectProps = {
  options: {
    label: string;
    value: string;
    image?: string;
    labelComponent?: React.ReactElement;
  }[];
  value: string;
  defaultValue?: string;
  onChange: (_value: string) => void;
  placeHolder?: string;
  disabled?: boolean;
};

export function Select({
  options,
  value,
  defaultValue,
  onChange,
  placeHolder = "Select an option",
  disabled,
}: SelectProps) {
  const selectedOption = options.find((option) => option.value === value);

  return (
    <RadixSelect.Root
      value={value}
      defaultValue={defaultValue}
      onValueChange={onChange}
      disabled={disabled}
    >
      <SelectTrigger aria-label={selectedOption?.label || ""}>
        <Flex fullWidth justify="between" align="center" px="small">
          <RadixSelect.Value placeholder={placeHolder} />
          <SelectIcon>
            <ChevronDownIcon />
          </SelectIcon>
        </Flex>
      </SelectTrigger>
      <RadixSelect.Portal>
        <SelectContent>
          <SelectScrollUpButton>
            <ChevronUpIcon />
          </SelectScrollUpButton>
          <SelectViewport>
            <RadixSelect.Group>
              {options.map(({ label, value, image, labelComponent }) => (
                <SelectItem key={value} value={value}>
                  <Flex
                    direction="row"
                    justify="between"
                    align="center"
                    fullWidth
                  >
                    {image && (
                      <Image
                        src={image}
                        alt={label}
                        width={18}
                        height={18}
                        style={{ marginRight: 10 }}
                      />
                    )}
                    {labelComponent || label}
                  </Flex>
                </SelectItem>
              ))}
            </RadixSelect.Group>
          </SelectViewport>
          <SelectScrollDownButton>
            <ChevronDownIcon />
          </SelectScrollDownButton>
        </SelectContent>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
}

export default Select;
