import Api from '@/services/Api';

export default {
  index() {
    return Api().get('jewelry'); 
  },
  show(jewelryId) {
    return Api().get('jewelry/' + jewelryId); 
  },
  post(jewelry) {
    return Api().post('jewelry', jewelry); 
  },
  put(jewelry) {
    return Api().put('jewelry/' + jewelry.id, jewelry); 
  },
  delete(jewelry) {
    return Api().delete('jewelry/' + jewelry.id); 
  },
};
