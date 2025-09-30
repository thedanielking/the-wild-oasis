import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabin";

export function useDeleteCabin() {
    
    const queryClient = useQueryClient(); // gets access to the client in the app.jsx file
    
      const {isLoading: isDeleting, mutate: deleteCabin} = useMutation({
        mutationFn: deleteCabinApi,
        onSuccess: ()=> {
          toast.success("Cabin successfully deleted.")
          queryClient.invalidateQueries({
            queryKey: ["cabins"]
          })
        },
    
        onError: err => toast.error(err.message)
      })


      return {isDeleting, deleteCabin}
}

