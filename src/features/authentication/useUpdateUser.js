import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    mutationKey: ["user"],
    onSuccess: () => {
      toast.success("User was successfully updated.");
      // queryClient.setQueryData("user", user);
      queryClient.invalidateQueries();
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUser, isUpdating };
}

export default useUpdateUser;
