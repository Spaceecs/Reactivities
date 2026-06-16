import {
  useController,
  type FieldValues,
  type UseControllerProps,
} from "react-hook-form";
import { DateTimePicker, type DateTimePickerProps } from "@mui/x-date-pickers";

type Props<T extends FieldValues> = UseControllerProps<T> & DateTimePickerProps;

export default function DateTimeInput<T extends FieldValues>(props: Props<T>) {
  const {
    name,
    control,
    rules,
    defaultValue,
    shouldUnregister,
    ...pickerProps
  } = props;

  const { field, fieldState } = useController({
    name,
    control,
    rules,
    defaultValue,
    shouldUnregister,
  });

  return (
    <DateTimePicker
      {...pickerProps}
      value={field.value ? new Date(field.value) : null}
      onChange={(value) => {
        field.onChange(value ? new Date(value) : null);
      }}
      sx={{ width: "100%" }}
      slotProps={{
        textField: {
          onBlur: field.onBlur,
          error: !!fieldState.error,
          helperText: fieldState.error?.message,
        },
      }}
    />
  );
}
