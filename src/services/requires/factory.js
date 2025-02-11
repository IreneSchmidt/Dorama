import useApi from '../../composables/UseApi';

export default function serviceFactory(apiUrl) {
  const { list, post, update, remove, getById } = useApi(apiUrl);

  return {
    list,
    post,
    update,
    remove,
    getById
  };
}
