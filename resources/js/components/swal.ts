import SweetAlert from 'sweetalert2';

const Swal = SweetAlert.mixin({
    customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-secondary',
        popup: 'bg-white dark:bg-slate-900 text-black dark:text-white',
    },
    buttonsStyling: false,
});

export default Swal;
