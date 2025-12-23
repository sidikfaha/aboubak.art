export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { collection, where } = body;

  if (!collection) {
    throw createError({
      statusCode: 400,
      message: "Collection is required",
    });
  }

  let query = queryCollection(event, collection as "blog");

  // Apply where conditions if provided
  if (where && Array.isArray(where)) {
    for (const condition of where) {
      if (condition.field && condition.operator && condition.value !== undefined) {
        query = query.where(condition.field, condition.operator, condition.value);
      }
    }
  }

  const result = await query.all();

  return { result };
});
