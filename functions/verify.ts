export const onRequestGet: PagesFunction = async ({ request, env }) => {
  try {
    const url = new URL(request.url)
    const password = url.searchParams.get('password') || ''
    const expected = (env as any).CASE_STUDY_PASSWORD as string | undefined

    // If the env var is not configured, fail closed (do not leak content)
    const valid = Boolean(expected) && password === expected

    return new Response(JSON.stringify({ valid }), {
      status: 200,
      headers: {
        'content-type': 'application/json; charset=UTF-8',
        'cache-control': 'no-store'
      }
    })
  } catch (e) {
    return new Response(JSON.stringify({ valid: false }), {
      status: 200,
      headers: { 'content-type': 'application/json; charset=UTF-8' }
    })
  }
}
