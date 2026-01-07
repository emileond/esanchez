export const onRequestGet: PagesFunction = async (context) => {
  try {
    const { request, env } = context
    const url = new URL(request.url)
    const pwd = url.searchParams.get('password') || ''

    const expected = (env as Record<string, string> | undefined)?.CASE_STUDY_PASSWORD || ''
    const ok = !!pwd && expected !== '' && pwd === expected

    return new Response(JSON.stringify({ ok }), {
      status: 200,
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'cache-control': 'no-store',
      },
    })
  } catch (e) {
    return new Response(JSON.stringify({ ok: false }), {
      status: 200,
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'cache-control': 'no-store',
      },
    })
  }
}
