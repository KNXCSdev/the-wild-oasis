import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleteSelectedBooking, isLoading: isDeletingBooking } = useMutation({
    mutationFn: deleteBooking,
    mutationKey: ["bookings"],

    onSuccess: () => {
      toast.success(`Booking was successfully deleted`);
      queryClient.invalidateQueries();
    },
    onError: () => {
      toast.error(`There was an error deleting a booking`);
    },
  });

  return { deleteSelectedBooking, isDeletingBooking };
}

export default useDeleteBooking;
