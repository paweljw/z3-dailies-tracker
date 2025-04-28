const DB_NAME = "z3quest";
const STORE_NAME = "completedTasks";
const DB_VERSION = 1;

let db: IDBDatabase | null = null;

export async function initDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => {
      reject(
        new Error(
          `Failed to open database: ${request.error?.message ?? "Unknown error"}`,
        ),
      );
    };

    request.onsuccess = () => {
      db = request.result;
      resolve(db);
    };

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
  });
}

export async function saveCompletedTasks(
  tableName: string,
  tasks: number[],
): Promise<void> {
  if (!db) {
    await initDB();
  }

  return new Promise((resolve, reject) => {
    const transaction = db!.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.put(tasks, tableName);

    request.onerror = () => {
      reject(
        new Error(
          `Failed to save tasks: ${request.error?.message ?? "Unknown error"}`,
        ),
      );
    };

    request.onsuccess = () => {
      resolve();
    };
  });
}

export async function loadCompletedTasks(tableName: string): Promise<number[]> {
  if (!db) {
    await initDB();
  }

  return new Promise((resolve, reject) => {
    const transaction = db!.transaction(STORE_NAME, "readonly");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.get(tableName);

    request.onerror = () => {
      reject(
        new Error(
          `Failed to load tasks: ${request.error?.message ?? "Unknown error"}`,
        ),
      );
    };

    request.onsuccess = () => {
      const result = request.result as number[] | undefined;
      resolve(result ?? []);
    };
  });
}
