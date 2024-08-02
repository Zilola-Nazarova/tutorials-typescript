enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON };

interface Resource<T> {
  uid: number;
  resourceName: ResourceType;
  data: T;
}

const doc1: Resource<object> = {
  uid: 1,
  resourceName: ResourceType.AUTHOR,
  data: { name: 'shaun' }
}

const doc2: Resource<string[]> = {
  uid: 2,
  resourceName: ResourceType.PERSON,
  data: ['bread', 'milk', 'toilet roll']
}

console.log(doc1, doc2);
